
import {
  Home,
  ChatBubble,
} from '@mui/icons-material';

import NotFoundPage from "@pages/utils/NotFoundPage";
// import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import { RoutesObject } from './RoutesObject';
import { HomePage } from '@pages/HomePage';

const RouteList: RoutesObject[] = [
  { 
    path: '/',
    label: 'Dashboard',
    name: 'dashboard',
    element: <HomePage />,
    group: null,
    isPrivate: false,
    isExact: true,
    isDrawerMenu: false,
    component: NotFoundPage,
    isDashboardShow: true,
    icon: Home,
    groupset: [],
  },
  {
    path: '/login',
    label: 'Login Page',
    name: 'login',
    element: <LoginPage />,
    group: null,
    isPrivate: false,
    isExact: true,
    isDrawerMenu: false,
    component: LoginPage,
    isDashboardShow: false,
    icon: ChatBubble,
    groupset: [],
  },
]

export default RouteList;