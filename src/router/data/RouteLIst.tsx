
import NotFoundPage from "@pages/utils/NotFoundPage";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";

const RouteList = [
  { 
    index: true, 
    path: "/",
    name: 'home',
    element: <HomePage/>,
    isDrawerMenu: false,
    isPrivate: true,
  },
  {
    index: false,
    path: "/login",
    name: 'login',
    element: <LoginPage/>,
    isDrawerMenu: false,
    isPrivate: false
  },
  { 
    path: "*",
    name: 'not-found',
    element: <NotFoundPage/>,
    isDrawerMenu: false,
    isPrivate: false
  },
]

export default RouteList;