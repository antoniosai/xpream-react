import { Card } from '@mui/material';
import { AppTab } from '@component/AppTab';
import { TabObject } from '@component/AppTab/data/TabObject';
import { AppWrapper } from '@component/AppWraper';

import { OneDayClosingStatus } from './components/OneDayClosingStatus';
import { WelcomeScreen } from './components/WelcomeScreen';

export function HomePage() {

  const tabData: TabObject[] = [
    {
      title: 'Dashboard',
      component: WelcomeScreen
    },
    {
      title: 'One Day Closing Status',
      component: OneDayClosingStatus
    }
  ];

  return (
    <AppWrapper>
      <Card variant="outlined">
        <AppTab datas={tabData} />
      </Card>
    </AppWrapper>
  );
}
