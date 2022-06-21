import React from "react";
import { Box, Tab, Tabs } from '@mui/material';
import { TabPanel } from "../TabPanel";
import { a11yProps } from "../TabPanel/props";

export function AppTab() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return(
    <React.Fragment>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Dashboard" {...a11yProps(0)} />
          <Tab label="One Day Closing Status" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </React.Fragment>
  )
}