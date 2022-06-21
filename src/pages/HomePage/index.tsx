import { Card } from '@mui/material';
import { AppTab } from '@component/AppTab';
import { OneDayClosingStatus } from './components/OneDayClosingStatus';
import { TabObject } from '@component/AppTab/data/TabObject';
import { AppWrapper } from '@component/AppWraper';

export function HomePage() {

  const tabData: TabObject[] = [
    {
      title: 'Dashboard',
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
