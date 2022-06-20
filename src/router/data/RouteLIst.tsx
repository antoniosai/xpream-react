
import {
  Bookmarks,
  ChatBubble,
  DeveloperBoard,
  FiberManualRecord,
  Folder,
  HealingSharp,
  Home,
  Key,
  MobileScreenShare,
  Place,
  RoomServiceRounded,
  ShoppingBag,
} from '@mui/icons-material';

import NotFoundPage from "@pages/utils/NotFoundPage";
// import HomePage from "@pages/HomePage";
import { RoutesObject } from './RoutesObject';
import { HomePage } from '@pages/HomePage';
import { TaskReview } from '@pages/TaskReview';
import { TemplateWrapper } from '@component/TemplateWrapper';
import { XopsPage } from '@pages/XopsPage';

const RouteList: RoutesObject[] = [
  {
    path: '/home',
    label: 'Home',
    name: 'home',
    group: null,
    isPrivate: false,
    isExact: true,
    element: <HomePage/>,
    component: HomePage,
    isDashboardShow: true,
    icon: Home,
    groupset: [],
  },
  {
    path: '/executive-summary-dashboard',
    label: 'Executive Summary Dashboard',
    name: 'executive-summary-dashboard',
    group: null,
    isPrivate: false,
    isExact: true,
    element: <HomePage />,
    component: HomePage,
    isDashboardShow: true,
    icon: ChatBubble,
    groupset: [],
  },
  {
    path: '/trb',
    label: 'Task Review Board',
    name: 'trb',
    group: null,
    isPrivate: false,
    isExact: false,
    element: <TemplateWrapper/>,
    component: TemplateWrapper,
    isDashboardShow: true,
    icon: Place,
    groupset: [
      {
        path: 'task-review',
        label: 'Task Review',
        name: 'trb',
        group: null,
        isPrivate: false,
        isExact: false,
        element: <TaskReview/>,
        component: TaskReview,
        isDashboardShow: true,
        icon: FiberManualRecord,
        groupset: [],
      },
      {
        path: 'planning-engineering',
        label: 'Planning Engineering',
        name: 'trb',
        group: null,
        isPrivate: false,
        isExact: false,
        element: <NotFoundPage />,
        component: NotFoundPage,
        isDashboardShow: true,
        icon: FiberManualRecord,
        groupset: [],
      },
    ],
  },
  {
    path: '/slot-capacity',
    label: 'Slot & Capacity',
    name: 'executive-summary-dashboard',
    group: null,
    isPrivate: false,
    isExact: true,
    element: <HomePage />,
    component: HomePage,
    isDashboardShow: true,
    icon: RoomServiceRounded,
    groupset: [
      {
        path: 'planning-gates',
        label: 'Planning Gates',
        name: 'planning-gates',
        group: null,
        isPrivate: false,
        isExact: true,
        element: <HomePage />,
        component: HomePage,
        isDashboardShow: true,
        icon: FiberManualRecord,
        groupset: [],
      },
    ],
  },
  {
    path: '/production-planning',
    label: 'Production Planning',
    name: 'production-planning',
    group: null,
    isPrivate: false,
    isExact: true,
    element: <HomePage />,
    component: HomePage,
    isDashboardShow: true,
    icon: Bookmarks,
    groupset: [],
  },
  {
    path: '/production-control-hangar',
    label: 'Prod. Control Hangar',
    name: 'production-control-hangar',
    group: null,
    isPrivate: false,
    isExact: true,
    element: <HomePage />,
    component: HomePage,
    isDashboardShow: true,
    icon: HealingSharp,
    groupset: [],
  },
  {
    path: '/production-control-shop',
    label: 'Prod. Control Shop',
    name: 'production-control-shop',
    group: null,
    isPrivate: false,
    isExact: true,
    element: <HomePage />,
    component: HomePage,
    isDashboardShow: true,
    icon: ShoppingBag,
    groupset: [],
  },
  {
    path: '/people-development',
    label: 'People Development',
    name: 'people-development',
    group: null,
    isPrivate: false,
    isExact: true,
    element: <HomePage />,
    component: HomePage,
    isDashboardShow: true,
    icon: DeveloperBoard,
    groupset: [],
  },
  {
    path: '/xops',
    label: 'XOPS',
    name: 'xops',
    group: null,
    isPrivate: false,
    isExact: true,
    element: <XopsPage />,
    component: HomePage,
    isDashboardShow: true,
    icon: MobileScreenShare,
    groupset: [],
  },
  {
    path: '/mater-data',
    label: 'Master Data',
    name: 'master-data',
    group: null,
    isPrivate: false,
    isExact: true,
    element: <HomePage />,
    component: HomePage,
    isDashboardShow: true,
    icon: Folder,
    groupset: [
      {
        path: 'user-management',
        label: 'User Management',
        name: 'user-management',
        group: null,
        isPrivate: false,
        isExact: true,
        element: <HomePage />,
        component: HomePage,
        isDashboardShow: true,
        icon: FiberManualRecord,
        groupset: [],
      },
    ],
  },
  {
    path: '/miscellaneous',
    label: 'Miscellaneous',
    name: 'miscellaneous',
    group: null,
    isPrivate: false,
    isExact: true,
    element: <HomePage />,
    component: HomePage,
    isDashboardShow: true,
    icon: Key,
    groupset: [],
  },
];

export default RouteList;