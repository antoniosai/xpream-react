// Depedencie(s) Import
import { useEffect } from "react";
import {
  Routes, 
  Route,
} from "react-router-dom";
import Cookies from "js-cookie";

// Const / Service import
import { RoutesObject } from "./data/RoutesObject";
import { useAppDispatch } from "@store/store";
import { COOKIE_TOKEN } from "@services/constants";

// Pages import
import NotFoundPage from "@pages/utils/NotFoundPage";
import LoginPage from "@pages/LoginPage";
import LoginData from "@pages/LoginPage/data/LoginData";
import RouteList from "./data/RouteLIst";

export const routes: RoutesObject[] = RouteList;

export default function RouteApp() {
  const dispatch = useAppDispatch();
  const loginActions = LoginData.actions;
  
  useEffect(() => {
    if (
      Cookies.get(COOKIE_TOKEN) !== undefined &&
      Boolean(localStorage.getItem("codersid")) === true
      ) {
      dispatch(loginActions.setLoginState(true));
    } else {
      dispatch(loginActions.setLoginState(false));
    }
  });
  
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          // TODO : Get LoginState and parse into getElement method below here
          element={getElement(true)(routes[index])}
        />
      ))}
      <Route path="/" element={<LoginPage/>} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
}

const getElement = (loginState: boolean) => (route: RoutesObject) => {

  loginState ? console.log("Login state is true") : console.log('loginState is false');

  if(route.isPrivate) {
    if (loginState) {
      return route.element;
    } else {
      return <LoginPage/>;
    }
  } else {
    return route.element
  }
};