import { Box, Card } from '@mui/material';
import { MainDashboard } from '@component/layout/auth/MainDashboard';
import { AppTab } from '@component/AppTab';
import React from 'react';
import { OneDayClosingStatus } from './components/OneDayClosingStatus';
import { TabObject } from '@component/AppTab/data/TabObject';

export function HomePage() {

  const tabData: TabObject[] = [
    {
      title: 'Dashboard',
      component: OneDayClosingStatus
    }
  ];

  return (
    <MainDashboard>
      <Box
        sx={{
          backgroundColor: 'primary.light',
          padding: '10px 30px 30px 30px;', // top right bottom  left
        }}
      >
        <Card variant="outlined">
          <AppTab datas={tabData} />
        </Card>
      </Box>
    </MainDashboard>
  );
}
