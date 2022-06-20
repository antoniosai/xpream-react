import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelTokenSource } from "axios";
import { DASHBOX_URL } from "./constants";

export interface ApiResponse<T> {
  data?: T;
  message?: string;
}

export function generateCancelToken(): CancelTokenSource {
  return axios.CancelToken.source();
}

abstract class ApiService {

  cancelToken:CancelTokenSource;

  http:AxiosInstance;

  config: AxiosRequestConfig<Object> | undefined;

  authToken: string;

  constructor(cancelToken: CancelTokenSource) {
    this.authToken = "";
    this.cancelToken = cancelToken;
    this.http = axios.create({
      baseURL: DASHBOX_URL,
      withCredentials: true,
      cancelToken: this.cancelToken.token,
    });

    this.http.interceptors.response.use((response: AxiosResponse<any>) => {
      return Promise.resolve(response);
    }, this.onResponseError.bind(this));
  }

  cancel() {
    return this.cancelToken.cancel();
  }

  setAuthToken(token: string){
    this.authToken = token;
  }

  onResponseError(error: AxiosError<any>):Promise<AxiosError> {
    if(error.response?.status === 401) {
      // window.location.href = "/login";
      console.error("You are not authorize for this action");
      Promise.reject();
    }

    if(error.response?.status === 403) {
      console.error("You are not authorize for this action");
      Promise.reject();
    }

    if(error.response?.status === 404) {
      console.error("You were lost");
      Promise.reject("You were lost");
    }

    return Promise.reject(error);
  }

  all([...args]){
    return axios.all([...args]);
  }

  post(url: string, data: Object | string) {
    return this.http.post(url, data, this.config === undefined ? undefined : this.config );
  }


  get(url: string) {
    return this.http.get(url, this.config === undefined ? undefined : this.config);
  }

  put(url: string, data: Object) {
    return this.http.put(url, data, this.config === undefined ? undefined : this.config );
  }

  delete(url: string) {
    return this.http.delete(url, this.config === undefined ? undefined : this.config);
  }
}

export default ApiService;