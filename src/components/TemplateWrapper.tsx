import { Box } from '@mui/material';
import { MainDashboard } from '@component/layout/auth/MainDashboard';
import { Outlet } from 'react-router';

export function TemplateWrapper() {
  return (
    <MainDashboard>
      <Box
        sx={{
          padding: '10px 30px 30px 30px;', // top right bottom  left
        }}
      >
        <Outlet />
      </Box>
    </MainDashboard>
  );
}
