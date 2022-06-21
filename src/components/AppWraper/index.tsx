import * as React from 'react';
import { Box } from '@mui/material';
import { MainDashboard } from '@component/layout/auth/MainDashboard';

interface DashboardProps {
  children?: React.ReactElement;
}

export function AppWrapper(props: DashboardProps) {

  return (
    <MainDashboard>
      <Box
        sx={{
          backgroundColor: 'primary.light',
          padding: '10px 30px 30px 30px;', // top right bottom  left
        }}
      >
        {props.children}
      </Box>
    </MainDashboard>
  );
}
