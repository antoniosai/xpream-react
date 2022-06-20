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
import RouteList from "./data/RouteList";
import { TemplateWrapper } from "@component/TemplateWrapper";

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
      {/* Dynamic Routes */}
      {routes.map((route, index) => {
        if(route.groupset.length > 0) {
          return (
            <Route key={index} path={route.path} element={<TemplateWrapper/>}>
              {route.groupset.map((child, i) => (
                <Route key={i} path={child.path} element={child.element} />
              ))}
            </Route>
          )
        } else {
          return (<Route key={index} path={route.path} element={route.element} />)
        } 
      })}
      {/* Dynamic Routes */}

      {/* Static Routes */}
      <Route path="/login" element={<LoginPage/>} />
      <Route path="*" element={<NotFoundPage/>} />
      {/* Staic Routes */}
    </Routes>
  );
}