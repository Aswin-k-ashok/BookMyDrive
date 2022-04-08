import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import styled from 'styled-components'
import ProfileCard from '../../ProfileCard';
import ProfileUpdate from './ProfileUpdate';

const Glgird = styled.div`

background: rgba( 35, 35, 35, 0.3 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 14.5px );
-webkit-backdrop-filter: blur( 14.5px );
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
      backgroundImage: 'linear-gradient(120deg, #cfd9df 0%, #e2ebf0 100%)',
      padding: '5em',
      borderRadius: '8px'
    }
  })

  const classes = useStyles()

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container style={{ marginTop: '3em' }} className={classes.gradientBackground}>
      <Glgird>

        <Box sx={{ width: '100%', marginTop: '2em', color: 'white' }}>
          <Box sx={{ borderBottom: 0, borderColor: 'tranparant' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
              <Tab label="profile" {...a11yProps(0)} style={{ color: 'white', fontWeight: '800' }} />
              <Tab label="update profile" {...a11yProps(1)} style={{ color: 'white', fontWeight: '800' }} />
              <Tab label="history" {...a11yProps(2)} style={{ color: 'white', fontWeight: '800' }} />
              <Tab label="partner page" {...a11yProps(2)} style={{ color: 'white', fontWeight: '800' }} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ProfileCard />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ProfileUpdate />
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item five
          </TabPanel>
        </Box>
      </Glgird>
    </Container>
  );
}
