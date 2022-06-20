import { TemplateWrapper } from '@component/TemplateWrapper';
import LoginPage from '@pages/LoginPage';
import { RoutesObject } from '@router/data/RoutesObject';

const WithLoginPage = (route: RoutesObject) => {
  
  if(route.isPrivate) {
    if (true) {
      if(route.groupset.length > 0) {
        return <TemplateWrapper/>
      }

      return route.element;
    } else {
      return <LoginPage />;
    }
  }
  return route.element
};

export default WithLoginPage;