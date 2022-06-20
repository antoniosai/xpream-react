import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import basicTheme from "./themes/basic_theme";
import store from "@store/store";
import RoutePage from "@router/main";
import { ThemeProvider } from "@mui/material";
// import ReactGA from "react-ga";

// const TRACKING_ID = "UA-212480565-1";
// ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    
    <Provider store={store}>
      <ThemeProvider theme={basicTheme}>
        <Router>
          <RoutePage />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
