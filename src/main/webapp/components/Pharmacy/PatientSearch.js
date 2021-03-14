import React from 'react';
import MaterialTable from 'material-table';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
import "./patientPrescriptions.css";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

const PatientSearch = (props) => {
  const prescriptions = useSelector(state => state.pharmacy.allPrescriptions)

  const totalDrugsPrescribed = (drugsArray) => {
    console.log(prescriptions)
    const dispensed = []

    drugsArray.map(drugs => {
        if (drugs.data.prescription_status === 1)
          dispensed.push(drugs.data)
       
    })
    
    return dispensed.length
  }
 
  const drugsPrescriptions = []
  prescriptions.forEach(function(value, index, array) {
   const dataSamples = value.formDataObj
    if(value.formDataObj.data!==null) {
    for(var i=0; i<dataSamples.length; i++){
        for (var key in dataSamples[i]) {
          if (dataSamples[i][key]!==null && dataSamples[i][key].prescription_status >= 0 )
            drugsPrescriptions.push(value)
        }            
      }
    }
  });

  return (
    <div>
      <MaterialTable
      
        title="Drug Prescriptions"
        columns={[
          { title: "Patient ID", field: "Id" },
          {
            title: "Patient Name",
            field: "name",
          },
          { title: "Prescription Date", field: "date", type: "date" },
          {
            title: "Total Prescribed",
            field: "prescribedCount",
            filtering: false,
          },
          {
            title: "Total Dispensed",
            field: "dispensedCount",
            filtering: false,
          },
        
          {
            title: "Action",
            field: "actions",
            filtering: false,
          },
        ]}
        data={prescriptions.map((prescription) => ({
          Id: prescription.hospitalNumber,
          name: prescription.firstName + " " + prescription.lastName,
          date: prescription.dateEncounter,
          prescribedCount: prescription.formDataObj.length,
          dispensedCount: totalDrugsPrescribed(prescription.formDataObj),
          // type:   prescription.formDataObj.data.type,
          actions: (
            
            <Link
              to={{
                pathname: "/prescriptions",
                state: prescription,
               
              }}
              style={{ cursor: "pointer", color: "blue", fontStyle: "bold" }}>
              <Tooltip title="View Prescription">
                <IconButton aria-label="View Prescription">
                  <VisibilityIcon color="primary" />
                </IconButton>
              </Tooltip>
            </Link>
          ),
        }))}
        options={{
          pageSizeOptions: [50,100,150,200],
          actionsColumnIndex: -1,
          headerStyle: {
            backgroundColor: "#9F9FA5",
            color: "#000",
            margin: "auto",
          },
          filtering: true,

          searchFieldStyle: {
            width: "300%",
            margingLeft: "250px",
          },

          exportButton: true,
          searchFieldAlignment: "left",
        }}
      />
    </div>
  );
}

export default PatientSearch;


