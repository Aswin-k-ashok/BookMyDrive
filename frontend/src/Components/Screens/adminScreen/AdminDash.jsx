import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import Carmanagement from './Carmanagement';
import UserManagement from './UserManagement';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <>

            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
                style={{ width: '100vw' }}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        </>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


function AdminDash() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>

            <Grid container>
                <Box
                    sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}



                >
                    <Grid item sm={12} md={2} lg={2}>


                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            style={{ display: "flex", alignItems: 'end' }}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 1, borderColor: 'divider' }}
                        >
                            <Tab label="car management" {...a11yProps(0)} />
                            <Tab label="owner management" {...a11yProps(1)} />
                            <Tab label="user managemente" {...a11yProps(2)} />
                            <Tab label="location management" {...a11yProps(3)} />
                            <Tab label="owner request" {...a11yProps(4)} />
                            <Tab label="Item Six" {...a11yProps(5)} />
                            <Tab label="Item Seven" {...a11yProps(6)} />
                        </Tabs>
                    </Grid>

                    <Grid item sm={12} md={10} lg={10}>


                        <TabPanel value={value} index={0}>
                            <Carmanagement />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            owner management
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <UserManagement />
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            location management
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            owner request
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            Item Six
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                            Item Seven
                        </TabPanel>
                    </Grid>
                </Box >
            </Grid>
        </>
    );

}

export default AdminDash