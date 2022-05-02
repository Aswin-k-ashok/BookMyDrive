import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';
import ProfileCard from '../../ProfileCard';
import CarUpload from '../ownerScreens/CarUpload';
import DashBoard from '../ownerScreens/DashBoard';
import OwnerRegister from './OwnerRegister';
import ProfileUpdate from './ProfileUpdate';

const Glgird = styled.div`
min-height:80vh;
background: rgba( 255, 255, 255, 0.05 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 13.5px );
-webkit-backdrop-filter: blur( 13.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );


`;


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const useStyles = makeStyles({
    gradientBackground: {
      // backgroundImage: 'linear-gradient(120deg, #cfd9df 0%, #e2ebf0 100%)',
      backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/bmdimageupload.appspot.com/o/images%2FCity%20driver-cuate.png0c2aa81b-a35f-4781-a1a0-579fb874e92e?alt=media&token=de1bc275-622e-4492-8d8c-283c236d08c2")`,
      backgroundRepeat: 'round',
      padding: '5em',
      marginTop: '3em',
      borderRadius: '8px',
      minHeight: '80vh'
    }
  })

  const classes = useStyles()

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container style={{}} className={classes.gradientBackground}>
      <Glgird>
        <h2 style={{ margin: '1em' }}>Dashboard</h2>
        <Box sx={{ width: '100%', marginTop: '2em', color: 'white' }}>
          <Box sx={{ borderBottom: 0, borderColor: 'tranparant', display: 'flex', justifyContent: 'center' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
              <Tab label="profile" {...a11yProps(0)} style={{ color: 'white', fontWeight: '800', background: 'black', borderRadius: '10px 0px 0px 10px' }} />
              <Tab label="update profile" {...a11yProps(1)} style={{ color: 'white', fontWeight: '800', background: 'black' }} />
              <Tab label="history" {...a11yProps(2)} style={{ color: 'white', fontWeight: '800', background: 'black' }} />
              <Tab label="partner page" {...a11yProps(2)} style={{ color: 'white', fontWeight: '800', background: 'black' }} />
              <Tab label="car upload" {...a11yProps(2)} style={{ color: 'white', fontWeight: '800', background: 'black', borderRadius: '0px 10px  10px 0px' }} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ProfileCard />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ProfileUpdate />
          </TabPanel>
          <TabPanel value={value} index={2}>
            item 3
          </TabPanel>
          <TabPanel value={value} index={3}>
            <OwnerRegister />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <DashBoard />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <CarUpload />
          </TabPanel>
        </Box>
      </Glgird>
    </Container>
  );
}
