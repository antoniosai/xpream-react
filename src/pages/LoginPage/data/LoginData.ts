import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { COOKIE_TOKEN } from "@services/constants";
import Cookies from "js-cookie";

export interface LoginDataState {
  userName: string;
  password: string;
  accessToken?: string;
  refreshToken?: string;
  loginState?: boolean;
}

export const LoginInitialState:LoginDataState = {
  userName: "",
  password: "",
  accessToken: "",
  refreshToken: "",
  loginState: Boolean(localStorage.getItem("codersid")) === true && Cookies.get(COOKIE_TOKEN) !== undefined,
}

const LoginData = createSlice({
  name: "LoginData",
  initialState: LoginInitialState,
  reducers: {
    setLoginUserName:(state = LoginInitialState, action:PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setLoginPassword:(state = LoginInitialState, action:PayloadAction<string>) => {
      state.password = action.payload;
    },
    setLoginAccessToken: (state = LoginInitialState, action: PayloadAction<string>) => {
      // Add cookies
      state.accessToken = action.payload;
    },
    setLoginRefreshToken: (state = LoginInitialState, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setLoginToken: (state = LoginInitialState, action: PayloadAction<LoginDataState>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    setLoginState: (state = LoginInitialState, action: PayloadAction<boolean>) => {
      state.loginState = action.payload;
    },
    resetLoginToken: (state = LoginInitialState) => {
      state.accessToken = "";
      state.refreshToken = "";
    }
  }
});

export const {actions, reducer} = LoginData;
export default LoginData;
