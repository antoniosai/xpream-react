import React from "react";
import { Box, Tab, Tabs } from '@mui/material';
import { TabObject } from './data/TabObject'
import { TabPanel } from "../TabPanel";
import { a11yProps } from "../TabPanel/props";

interface props {
  datas: TabObject[]
}

export function AppTab(props: props) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return(
    <React.Fragment>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {props.datas.map((tab, index) => (
            <Tab label={tab.title} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {props.datas.map((tab, index) => (
        <TabPanel value={value} index={index}>
          <tab.component />
        </TabPanel>
      ))}
    </React.Fragment>
  )
}