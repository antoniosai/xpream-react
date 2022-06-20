import LoginData from "@pages/LoginPage/data/LoginData";
import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector
} from "react-redux";
import { createTrackedSelector } from "react-tracked";


const store = configureStore({
  reducer:{
    loginPage: LoginData.reducer,

    //App UI State. Not pages
    // appState: AppUIData.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export const useTypedReduxSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useTrackedSelector = createTrackedSelector(useTypedReduxSelector);

export const useAppDispatch = () => useReduxDispatch<typeof store.dispatch>();
export const useAppSelector = <T extends unknown>(selectFunc: (state: RootState) => T) => {
  const state = useTrackedSelector();
  return selectFunc(state);
};

export default store;
