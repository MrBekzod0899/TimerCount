import React,{useState} from 'react';
import './counting.module.css'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';


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


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Counting() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
      <div className='container-fluid mt-3'>
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 justify-content-center">
                    <Box className='justify-content-center' sx={{ minWidth: 300,minHeight:400 }}>
                        <div className='card ' variant="outlined">
                            <div className='card-header'>
                                <Tabs className='justify-content-center text-center' value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Item One" {...a11yProps(0)} />
                                    <Tab label="Item Two" {...a11yProps(1)} />
                                    <Tab label="Item Three" {...a11yProps(2)} />
                                </Tabs>
                             </div>
                            <div className='timerWatch'>   
                                <TabPanel value={value} index={0}>
                                    Item One
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    Item Two
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    Item Three
                                </TabPanel>
                            </div>
                            
                        </div>
                    </Box>
                </div>
            </div>
      </div>
  )
}
