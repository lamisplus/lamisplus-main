import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { MdDashboard, MdContacts } from 'react-icons/md';
import {Card, CardBody, CardDeck, } from 'reactstrap';
import ChartList from './ChartList';
import { fetchChartsById } from "../../../actions/dataVisualisation";
import { connect } from 'react-redux';
import HighchartsReact from 'highcharts-react-official';
import { url } from "../../../api";
import axios from 'axios';
import {getQueryParams} from "components/Utils/PageUtils";
import GenerateChart from './GenerateChart';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={5}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root2: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        margin: theme.spacing(7),
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 12,

        },
        pos: {
            fontSize: 11,
        },
        cardContent: {
            padding: 2,
        },
        cardroot: {
            margin: theme.spacing(1),
            height: 250 + 'px !important',
        }

    },
    alertmsge: {
        marginTop: theme.spacing(2),
    },
    rootaccordia: {
        width: '100%',
    },
    accordiaheading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    allergiesroot: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },

    checkboxroot: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },

    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },

    },

    formroot: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },

    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    inforoot: {
        width: '95%',
        margin: 20,
        backgroundColor: '#eee',
    },
}));



const ScrollableTabsButtonForce = (props) => {

const classes = useStyles();
const [value, setValue] = useState(0);
const urlIndex = getQueryParams("tab", props.location.search); 
  const urlTabs = urlIndex !== null ? urlIndex : props.location.state ;
  useEffect ( () => {
    switch(urlTabs){  
      case "prescription": return setValue(1)
      default: return setValue(0)
    }
  }, [urlIndex]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [chart, setChart] = useState({})

    // APi request for Pie chart
      useEffect(() => {
          async function getCharacters() {
              try {
                  const response = await axios.get( '192.168.0.101/api/'+ 'dashboard');
                  console.log(response)
                  const body = response.data && response.data!==null ? response.data : {}; 
                  //setChart(response.json())                         
              } catch (error) {}
          }
          getCharacters();
      }, []); 

    
     console.log()
    function getList() {
        return fetch('192.168.0.101/api/dashboard')
          .then(data => data.json())
      }
      console.log(getList())

    return (
      <div className={classes.root}>
        <div className={classes.inforoot}>
          {/* <PatientDetailCard getpatientdetails={props.location.state }/>    */}
        </div>

        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="secondary"
            textColor="inherit"
            aria-label="scrollable force tabs example"
          >
            <Tab
              className={classes.title}
              label="Dashboard"
              icon={<MdDashboard />}
              {...a11yProps(0)}
            />
            <Tab
              className={classes.title}
              label="Generate Charts"
              icon={<AddBoxIcon />}
              {...a11yProps(1)}
            />
            <Tab
              className={classes.title}
              label="Chart Lists"
              icon={<FormatListBulletedIcon />}
              {...a11yProps(2)}
            />
          </Tabs>
          <div></div>
        </AppBar>

        <TabPanel value={value} index={0}>
            
        {/* {!facilities && facilities!==null ? facilities : {}.map((value) => {  
            <p>Test Chart List</p>
         })
         } */}
          <CardDeck>
            
            <Card>
             
              <CardBody>
                <div>
                    {/* <HighchartsReact options={basicColumn} /> */}
                </div> 
              
              </CardBody>
            </Card>
          </CardDeck>
          <br />
          <br />

        </TabPanel>
        <TabPanel value={value} index={1}>
             <GenerateChart /> 
        </TabPanel>
        <TabPanel value={value} index={2}>
             <ChartList />
        </TabPanel>

      </div>
    );
}

const mapStateToProps = state => ({
  patients: state.pharmacy.allPrescriptions
});

export default connect(mapStateToProps , { fetchChartsById })(ScrollableTabsButtonForce);