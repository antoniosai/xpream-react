
import {
  Home,
} from '@mui/icons-material';

import NotFoundPage from "@pages/utils/NotFoundPage";
// import HomePage from "@pages/HomePage";
import { RoutesObject } from './RoutesObject';
import { HomePage } from '@pages/HomePage';
import { TaskReview } from '@pages/TaskReview';
import { TemplateWrapper } from '@component/TemplateWrapper';

const RouteList: RoutesObject[] = [
  { 
    path: '/',
    label: 'Dashboard',
    name: 'index',
    element: <HomePage />,
    group: null,
    isPrivate: false,
    isExact: true,
    component: NotFoundPage,
    isDashboardShow: true,
    icon: Home,
    groupset: [],
  },
  { 
    path: 'trb',
    label: 'Task Review Board',
    name: 'trb',
    element: <TemplateWrapper />,
    group: null,
    isPrivate: false,
    isExact: true,
    component: TemplateWrapper,
    isDashboardShow: true,
    icon: Home,
    groupset: [
      { 
        path: 'task-review',
        label: 'Task Review',
        name: 'trb.task_review',
        element: <TaskReview />,
        group: null,
        isPrivate: false,
        isExact: true,
        component: TaskReview,
        isDashboardShow: true,
        icon: Home,
        groupset: [],
      },
    ],
  },
]

export default RouteList;