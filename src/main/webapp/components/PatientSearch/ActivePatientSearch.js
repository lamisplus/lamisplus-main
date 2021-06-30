import React, {useEffect} from 'react';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchAll, Delete as Del , fetchCheckedInPatients} from "../../actions/patients";
import "./PatientSearch.css";
import axios from "axios";
import {url as baseUrl} from "../../api";
import {Menu, MenuButton, MenuItem, MenuList} from "@reach/menu-button";
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const ActivePatientSearch = (props) => {
  const [loading, setLoading] = React.useState(false);

      useEffect(() => {
        const onSuccess = () => {
          setLoading(false);
        };
        const onError = () => {
          setLoading(false);
        };
      //  props.fetchAllPatients(onSuccess, onError);
      }, []); //componentDidMount

      const calculate_age = dob => {
        var today = new Date();
        var dateParts = dob.split("-");
        var dateObject = new Date(+dateParts[0], dateParts[1] - 1, +dateParts[2]);
        var birthDate = new Date(dateObject); // create a date object directly from `dob1` argument
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age_now--;
        }
      
        if (age_now === 0) {
          return m + " month(s)";
        }
        return age_now + " year(s)";
      };

    
  return (
    <div>
      <MaterialTable
      icons={tableIcons}
        title="Find Checked-In Patients"
        columns={[
          {
            title: "Patient Name",
            field: "name",
          },
          { title: "Patient ID", field: "id" },
          { title: "Age", field: "age", filtering: false },
          { title: "Check-In Time", field: "checkIn", filtering: false }
        ]}
        isLoading={loading}
        data={query =>
            new Promise((resolve, reject) =>
                axios.get(`${baseUrl}patients?size=${query.pageSize}&page=${query.page}&searchValue=${query.search}`)
                    .then(response => response)
                    .then(result => {

                      //console.log('in result')
                      //console.log( result.headers);
                      console.log( result.headers['x-total-count']);
                      resolve({
                        data: result.data.map((row) => ({
                          name: <Link
                              to ={{
                                pathname: "/patient-dashboard",
                                state: row.hospitalNumber
                              }}

                              title={"Click to view patient dashboard"}
                          >{row.firstName}  { ' '}  {row.lastName ? row.lastName.toUpperCase() : ""}</Link>,
                          id: row.hospitalNumber,
                          gender: row.details && row.details.gender && row.details.gender.display ? row.details.gender.display : 'N/A',
                          age: (row.dob === 0 ||
                              row.dob === undefined ||
                              row.dob === null ||
                              row.dob === "" )
                              ? 0
                              : calculate_age(row.dob),
                          address: row.street || '',
                          patientId: row.patientId,
                          visitId: row.visitId,
                          checkIn: row.dateVisitStart + ' ' + (row.timeVisitStart ? row.timeVisitStart : '' )
                        })),
                        page: query.page,
                        totalCount: result.headers['x-total-count'],
                      })
                    })
            )}
        // data={props.patientsList.map((row) => ({
        //   name: row.firstName +  ' ' + row.lastName,
        //   id: row.hospitalNumber,
        //   age: (row.dob === 0 ||
        //   row.dob === undefined ||
        //   row.dob === null ||
        //   row.dob === "" )
        //     ? 0
        //     : calculate_age(row.dob),
        //   address: row.street || ''  ,
        //   patientId: row.patientId,
        //   visitId: row.visitId,
        //   checkIn: row.dateVisitStart + ' ' + (row.timeVisitStart ? row.timeVisitStart : '' )
        // }))}
        
        actions= {[
          {
            icon: 'dashboard',
            iconProps: {color: 'primary'},
            tooltip: 'Patient Dashboard',
            onClick: (event, rowData) => rowData.id ? window.location.href = "patient-dashboard?hospitalNumber="+rowData.id: ""
          }]}
          //overriding action menu with props.actions 
          components={props.actions}
        options={{
          headerStyle: {
            backgroundColor: "#9F9FA5",
            color: "#000",
          },
          searchFieldStyle: {
            width : '300%',
            margingLeft: '250px',
          },
          filtering: true,
          exportButton: false,
          searchFieldAlignment: 'left',
          actionsColumnIndex: -1
        }}
      />
    </div>
  );
}

const mapStateToProps = state => {

    return {
      patientsList: state.patients.list
      //patientsList: state.patients.checkedInPatientList
    };
  };
  
  const mapActionToProps = {
    //fetchAllPatients: fetchCheckedInPatients,
    fetchAllPatients: fetchAll,
    deletePatient: Del
  };
  
export default connect(mapStateToProps, mapActionToProps)(ActivePatientSearch);