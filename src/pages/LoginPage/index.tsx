import { COOKIE_REFRESH_TOKEN, COOKIE_TOKEN } from "@services/constants";
import LocalStorageService from "@services/LocalStorageService";
import { useAppDispatch, useTypedReduxSelector } from "@store/store";
import decode, { JwtPayload } from "jwt-decode";
import React, { useEffect, useState } from "react";
import LoginData from "./data/LoginData";
import LoginService from "./data/services/LoginService";


function LoginPage() {
  // const [visibilityContent, setVisbility] = useState(false);
  const dispatch = useAppDispatch();

  //Login
  const loginActions = LoginData.actions;
  const loginState = useTypedReduxSelector((state) => state.loginPage);
  const loginService = LoginService;
  const localstorageService = LocalStorageService;

  const [emailValue] = useState("");
  const [passwordValue] = useState("");
  const [, setEmailError] = React.useState<{ emailValue: string }>();
  const [, setPasswordError] =
    React.useState<{ passwordValue: string }>();

  const validate = async () => {
    setEmailError({ emailValue: "" });
    let regEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(
      emailValue
    );
    if (!regEmail) {
      setEmailError({ emailValue: "email not valid" });
    }

    setPasswordError({ passwordValue: "" });
    let regPassword = passwordValue.length;
    if (regPassword < 9) {
      setPasswordError({ passwordValue: "minimum password is 8 character" });
    }
  };
  //App
  const handleOnSubmit = async () => {
    validate();
    try {
      const response = await loginService.authByUsernamePassword(
        loginState.userName,
        loginState.password
      );
      const data = response.data;
      loginService.setCookieToken(COOKIE_TOKEN, data.accessToken as string);
      loginService.setCookieToken(
        COOKIE_REFRESH_TOKEN,
        data.refreshToken as string
      );
      dispatch(loginActions.setLoginAccessToken(data.accessToken as string));
      dispatch(loginActions.setLoginRefreshToken(data.refreshToken as string));
      const { jti } = decode<JwtPayload>(data.accessToken as string);
      localstorageService.addRawItem("coders", jti as string);
      localstorageService.addRawItem("codersid", true);
      dispatch(loginActions.setLoginState(true));

      window.location.href = "/home";
    } catch (error) {
 
      dispatch(loginActions.setLoginState(false));

    }
  };

  const handleLoggedInCheck = async () => {
    try {
      const response = await loginService.usersLoggedInCheck();
      const data = response.data;
      loginService.setCookieToken(COOKIE_TOKEN, data.accessToken as string);
      loginService.setCookieToken(
        COOKIE_REFRESH_TOKEN,
        data.refreshToken as string
      );
      dispatch(loginActions.setLoginAccessToken(data.accessToken as string));
      dispatch(loginActions.setLoginRefreshToken(data.refreshToken as string));
      const { jti } = decode<JwtPayload>(data.accessToken as string);
      localstorageService.addRawItem("coders", jti as string);
      // redirect to dashboard page
      localstorageService.addRawItem("codersid", true);
      dispatch(loginActions.setLoginState(true));

      window.location.href = "/home";
    } catch (error) {
      //redirect to login page. Refresh token expired
      dispatch(loginActions.setLoginState(false));
    }
  };

  useEffect(() => {
    if (
      loginService.getCookieToken(COOKIE_REFRESH_TOKEN) !== undefined &&
      loginService.getCookieToken(COOKIE_TOKEN) !== undefined
    ) {
      loginService
        .usersPing()
        .then(() => {
          // redirect to dashboard here
          //...
          const { jti } = decode<JwtPayload>(
            loginService.getCookieToken(COOKIE_TOKEN) as string
          );
          localstorageService.addRawItem("coders", jti as string);
          localstorageService.addRawItem("codersid", true);
          dispatch(loginActions.setLoginState(true));
          window.location.href = "/home";
        })
        .catch(() => {
          // Get New Refreshed Token
          handleLoggedInCheck();
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <form onSubmit={handleOnSubmit}>

      <div className="container mx-auto mt-5 shadow rounded">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username"
              type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password" type="password" placeholder="******************" />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button className="button bg-blue-800 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
              type="submit">
              Sign In
            </button>
            <button className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
