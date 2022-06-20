import LoginPage from '@pages/LoginPage';
import { routes } from '@router/main';
import React from 'react';


export const WithLoginPage =
  (loginState: boolean) => (WrappedPage: React.ComponentType) => {

    return class withLogin extends React.Component {
      componentDidMount() {
      }

      render() {
        return loginState ? <WrappedPage /> : <LoginPage />;
      }
    };
  };

export function GetRouteForDrawerMenu() {
  return routes.filter(route => route.isDrawerMenu === true);
}

// const getElement = (loginState: boolean) => (route: RoutesObject) => {
//   loginState
//     ? console.log('Login state is true')
//     : console.log('loginState is false');

//   if (route.isPrivate) {
//     if (loginState) {
//       return route.element;
//     } else {
//       return <LoginPage />;
//     }
//   } else {
//     return route.element;
//   }
// };
