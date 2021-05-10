import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { Alert } from 'reactstrap'
import * as actions from "actions/patients";
import {connect} from 'react-redux';
import "./Style.css";
import { Badge } from 'reactstrap';
import {DRUG_ORDER_STATUS} from 'api/codes'


const columns = [
  {
    name: 'Date',
    selector: 'date_prescribed',
    sortable: false,
    Display: true
  },
  {
    name: 'Drug Name (Generic)',
    selector: 'drug',
    sortable: false,
    cell: row => (
      <span>
        {row.regimen ?
            ( row.regimen && row.regimen.regimen ? row.regimen.regimen + ' - ': '')
            :
        <b> {row.drugs && row.drugs.length > 0 ? row.drugs.map(x=>x.drug.name).toString() : ''}</b>}
      </span>
    )
  },
  {
    name: 'Dose',
    selector: 'dose',
    sortable: false,
    cell: row => (
        <span>
          {row.dosage_frequency || '-'}
        </span>
      )
  },
  {
    name: 'Period',
    selector: 'start_date',
    sortable: false,
    cell: row => (
      <span>
        {'Start at '} <b>{row.start_date || ''}</b> {' for '} <b>{row.duration}{' '}{row.duration_unit}</b>
      </span>
    )
  },
  {
    name: 'Quantity Dispensed',
    selector: 'quantity_dispensed',
    sortable: false,
  },
  {
    name: 'Prescription Status',
    selector: 'prescription_status',
    sortable: false,
    cell: row => <span> 
      <Badge  color="primary">{row.prescription_status ? DRUG_ORDER_STATUS.find(x => x.id == row.prescription_status).name : ''}</Badge>
      </span>
  }
]
function PreviousMedication (props) {
  const [errorMsg, setErrorMsg] = React.useState('')
  const [showErrorMsg, setShowErrorMsg] = useState(false)
  const onDismiss = () => setShowErrorMsg(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  React.useEffect(() => {
    setLoading(true)
    const onSuccess = () => {
      setData(props.previousMedications);
      setLoading(false)
    }
    const onError = () => {
      setLoading(false)
      setErrorMsg("Could not fetch previous medications, try again later");
    }
    props.fetchPatientMedicationOrder(props.patientId, onSuccess, onError)
  }, [props.patientId]);

  React.useEffect(() => {
    setData(props.previousMedications);

  }, [props.previousMedications]);
  
 
  return (
    <div>
<Alert color='danger' isOpen={showErrorMsg} toggle={onDismiss}>
            {errorMsg}
        </Alert>
        <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover={true}
            striped={true}
            subHeaderAlign={'left'}
            progressPending={loading}
            // noHeader={false}
            fixedHeader={true}
            persistTableHead
          />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    previousMedications: state.patients.previousMedications
  }
}

const mapActionToProps = {
  fetchPatientMedicationOrder: actions.fetchPatientLatestMedicationOrder,
}

export default connect(mapStateToProps, mapActionToProps)(PreviousMedication)