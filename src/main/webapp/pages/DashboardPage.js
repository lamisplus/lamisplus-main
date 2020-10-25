import Page from 'components/Page';
import UserProgressTable from 'components/UserProgressTable';

import { FaUserPlus, FaCalendarAlt, FaUserCheck} from 'react-icons/fa'; 
import { MdAirlineSeatIndividualSuite} from 'react-icons/md';
import {
  userProgressTableData,
} from 'demos/dashboardPage';
import React from 'react';
import { Line } from 'react-chartjs-2';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {Card,CardBody,CardHeader,CardTitle,Col,Row,} from 'reactstrap';
import {genderChart} from './DashBoardVisualisation/GenderChart';
import {combineChart} from './DashBoardVisualisation/CombineChart'
import CustomHighMap from './map';
import {deathChart} from './DashBoardVisualisation/DeathChart';
import {birthChart} from './DashBoardVisualisation/BirthChart';

const cardStyle = {
  borderColor: '#fff',
};

const options = {
  title: {
    text: 'Total Number of Death'
  },
  series: [{
    data: [1, 10, 3, 10]
  }]
}


class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <Page
        className="DashboardPage p-5"
        title="Dashboard"
      >
               {/* Card stats */}
               <Row>
                <Col lg={3} md={6} sm={6} xs={12}>
                  <Card  style={cardStyle} className="card-stats mb-4 mb-xl-0 p-3">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                           tag="h6"
                            className=" text-uppercase text-muted mb-0" 
                          >
                            Total Patient
                          </CardTitle>
                          <span className="h3 font-weight-bold mb-5">
                            350,897
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape  text-primary " >
                            <FaUserPlus size={30} />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        
                        <span className="text-nowrap">This month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12}>
                  <Card style={cardStyle} className="card-stats mb-4 mb-xl-0 p-3">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h6"
                            className="text-uppercase text-muted mb-0"
                          >
                            Emergency
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            22
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <MdAirlineSeatIndividualSuite size={30} />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                       {" "}
                        <span className="text-nowrap">This week</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12}>
                  <Card style={cardStyle} className="card-stats mb-4 mb-xl-0 p-3">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h6"
                            className="text-uppercase text-muted mb-0"
                          >
                            Checked In
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">924</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-black rounded-circle shadow">
                            <FaUserCheck size={30} />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        {" "}
                        <span className="text-nowrap">As at Today</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12}>
                  <Card style={cardStyle} className="card-stats mb-4 mb-xl-0 p-3 ">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h6"
                            className="text-uppercase text-muted mb-0"
                          >
                            Appointments
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            49
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <FaCalendarAlt size={30} />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        {" "}
                        <span className="text-nowrap">As at Today</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

          <Row>
      
          
          <Col md="8" sm="12" xs="12" xl="6" lg="8">
            <Card>
              <CardHeader>Total Registered Patients (Male and Female)  {' '}
              
                <small className="text-muted text-capitalize">In the last 4 Months</small>
              </CardHeader>
              <CardBody>
                <div>
                    <HighchartsReact options={genderChart} />
                </div> 
              </CardBody>
            </Card>
          </Col>
          <Col md="4" sm="12" xs="12" xl="6" lg="4">
            <Card>
              <CardHeader>Active Clinicians Now</CardHeader>
              <CardBody>
                <div>
                    <HighchartsReact options={combineChart} />
                </div>
              
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12" xl="6" lg="6">
            <Card>
              <CardHeader></CardHeader>
              <CardBody>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={deathChart}
                />
                
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12" xl="6" lg="6">
            <Card>
              <CardHeader></CardHeader>
              <CardBody>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={birthChart}
                />
              
              </CardBody>
            </Card>
          </Col>
        </Row>

      </Page>
    );
  }
}
export default DashboardPage;
