import React, {useEffect, useRef} from 'react';
import Page from 'components/Page';
import { connect } from 'react-redux';
import {Card,CardContent,} from '@material-ui/core';
import {FormBuilder } from 'react-formio';
import {fetchService, createForm} from '../../actions/formBuilder'
import {creatReport} from '../../actions/report'
import {
    FormGroup,
    Input,
    Label,
    Col,
    Row,
    Form
} from 'reactstrap';
import {Link} from 'react-router-dom';
import MatButton from '@material-ui/core/Button';
import { TiArrowBack } from "react-icons/ti";

const CreateReports = props => {
    const datanew = {
        parameterResourceObject: "",
        programCode: "",
    }
    const [newdata2] = React.useState(datanew);
    const [programCode, setprogramCode] = React.useState("");
    const [name, setname] = React.useState();
    const [description, setdescription] = React.useState("");
    const [dataSource, setdataSource] = React.useState("");
    const [template, settemplate] = React.useState("");
    const [res, setRes] = React.useState("");
    const textAreaRef = useRef(null);
    const [displayType, setDisplayType] = React.useState("")

    useEffect (() => {
        props.fetchService()
    }, [])

    const handleSubmit = e => {
        newdata2['programCode']=programCode;
        newdata2['parameterResourceObject']=res;
        newdata2['name']=name;
        newdata2['description']=description;
        newdata2['dataSource']=dataSource;
        newdata2['template']=template;


        e.preventDefault()
        console.log('programCode'+programCode);
        props.creatReport(newdata2);
    }

    return (
        <div className="PivotTable">
            <Page title="Report Builder " >
                <Card style={{ width: '80rem' }}>
                    <CardContent>
                        <Link to="/admin">
                            <MatButton
                                type="submit"
                                variant="contained"
                                color="primary"
                                className=" float-right mr-1">
                                <TiArrowBack /> &nbsp; back
                            </MatButton>
                        </Link>
                        <h4>Build Report</h4>
                        <hr />
                        <Form onSubmit={handleSubmit} >
                            <Row>
                                <Col md={4}> <FormGroup>
                                    <Label class="sr-only">Program Area</Label>
                                    {props.services.length && props.services.length > 0 ?
                                        <Input type="select" class="form-control" id="programCode" required value={programCode} onChange={e => setprogramCode(e.target.value)}>
                                            {props.services.map(service => (<option key={service.name} value={service.code}>{service.name}</option>))}
                                        </Input>:  <Input type="select" class="form-control" id="programCode" required value={programCode} onChange={e => setprogramCode(e.target.value)}>
                                            <option>No Programs Found</option>
                                        </Input>}
                                        </FormGroup></Col>

                                <Col md={4}><FormGroup>
                                    <Label class="sr-only">Report Name</Label>
                                    <Input type="text" class="form-control" id="name" name="name" value={name}   onChange={e => setname(e.target.value)} required/>
                                </FormGroup> </Col>

                                <Col md={4}> <FormGroup>
                                    <Label class="sr-only">Description</Label>
                                    <Input type="text" class="form-control" id="description" name="description" value={description}   onChange={e => setdescription(e.target.value)} required/>
                                </FormGroup></Col>
                            </Row>
                            <Row>
                                <Col md={4}> <FormGroup>
                                <Label class="sr-only">Date Source</Label>
                                <Input type="select"  id="dataSource" value={dataSource} onChange={e => setdataSource(e.target.value)}>
                                    <option></option>
                                    <option value="0">XML</option>
                                    <option value="1">JSON</option></Input>
                                    </FormGroup></Col>
                                        <Col md={4}> <FormGroup>
                                            <Label class="sr-only">Display Type</Label>
                                            <Input type="select"  id="displayType" value={displayType} onChange={e => setDisplayType(e.target.value)}>
                                                <option value="form">Form</option>
                                                <option value="wizard">Wizard</option></Input>
                                        </FormGroup></Col>
                                        </Row>
                                    <Row>
                                        <Col md={2}> <FormGroup>
                                            <button type="submit"  class="form-control btn btn-primary mt-4" >Save Template</button>
                                        </FormGroup></Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}> <FormGroup>
                                            <Label class="sr-only">Template(Paste XML or JSON Template)</Label>
                                            <Input type="textarea" name="text" id="template" value={template} rows="10" onChange={e => settemplate(e.target.value)}/>
                                        </FormGroup></Col>
                                    </Row>
                        </Form>
                    </CardContent>
                </Card>
                <hr></hr>
                <Card >
                    <CardContent>
                        <h4>Build Query Parameter Form</h4>
                        <FormBuilder form={{display: displayType}} saveText={'Create Form'} onChange={(schema) => {
                            setRes(JSON.stringify(schema));
                            console.log(res)
                        }} />
                    </CardContent>
                        </Card>
                        <hr></hr>
                        <Card >
                            <CardContent>
                            <h4>Json Form</h4>
                                <div >
                            <textarea cols="50"
                                      ref={textAreaRef}
                                      value={res}/>
                                </div>
                    </CardContent>
                </Card>
            </Page>
        </div>
    )
}

    const mapStateToProps = (state) => {
        return {
            services: state.formReducers.services
        }}

    const mapActionsToProps = ({
        // fetchModules: fetchModules,
        fetchService: fetchService,
        creatReport: creatReport,
        createForm: createForm
    })

export default connect(mapStateToProps, mapActionsToProps)(CreateReports)
