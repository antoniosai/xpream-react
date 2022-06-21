import { Box, Card } from '@mui/material';
import { MainDashboard } from '@component/layout/auth/MainDashboard';

import { AppTab } from '@component/AppTab';

export function HomePage() {
  return (
    <MainDashboard>
      <Box
        sx={{
          backgroundColor: 'primary.light',
          padding: '10px 30px 30px 30px;', // top right bottom  left
        }}
      >
        <Card variant="outlined">
          <AppTab />
        </Card>
      </Box>
    </MainDashboard>
  );
}
