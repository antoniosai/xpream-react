import ApiService, { generateCancelToken } from "@services/ApiService";
import { API_URL, COOKIE_REFRESH_TOKEN, COOKIE_TOKEN } from "@services/constants";
import { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import qs from "querystring";


const apiCancelToken = generateCancelToken();


export interface LoginSuccessResponse {
  accessToken?: string;
  refreshToken?: string;
}

class LoginService extends ApiService {

  private _loginPath: string;

  public get loginPath(): string {
    return this._loginPath;
  }
  public set loginPath(value: string) {
    this._loginPath = value;
  }

  constructor() {
    super(apiCancelToken);
    this._loginPath = `${API_URL}/login`
    this.config = {
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  }

  async authByUsernamePassword(userName: string, password: string) {
    const data = qs.stringify({
      "username": userName,
      "password": password
    });
    const login: AxiosResponse<LoginSuccessResponse> = await this.post(this.loginPath, data);
    return login;
  }

  async usersLoggedInCheck() {
    const check = `${API_URL}/auth/check`;
    if (this.getCookieToken(COOKIE_REFRESH_TOKEN) !== undefined) {
      this.config = {
        ...this.config,
        headers:{
          ...this.config?.headers,
          'Authorization': `Bearer ${Cookies.get(COOKIE_REFRESH_TOKEN)}`,
        }
      }
      const loginCheck: AxiosResponse<LoginSuccessResponse> = await this.get(check);
      return loginCheck;
    }
    
    return Promise.reject(false);
  }

  async usersPing() {
    const check = `${API_URL}/auth/ping`;
    if (this.getCookieToken(COOKIE_TOKEN) !== undefined) {
      this.config = {
        ...this.config,
        headers:{
          ...this.config?.headers,
          'Authorization': `Bearer ${Cookies.get(COOKIE_TOKEN)}`,
        }
      }
      const pingCheck:AxiosResponse<Object> = await this.get(check);
      return pingCheck;
    }
    
    return Promise.reject(false);
  }

  setCookieToken(key:string, payload:string){
    Cookies.set(key, payload, {expires: 1, sameSite:"Lax"});
  }

  removeCookieToken(key:string){
    Cookies.remove(key, {expires: 1, sameSite: "Lax"});
  }

  getCookieToken(key:string){
    return Cookies.get(key);
  }
}

export default new LoginService();