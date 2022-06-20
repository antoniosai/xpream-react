import { Box } from '@mui/material';
import { MainDashboard } from '@component/layout/auth/MainDashboard';

export function HomePage() {
  return (
    <MainDashboard>
      <Box
        sx={{
          backgroundColor: 'primary.light',
          padding: '10px 30px 30px 30px;', // top right bottom  left
        }}
      >
        ok
      </Box>
    </MainDashboard>
  );
}
