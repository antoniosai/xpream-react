import * as React from 'react';
import RouteList from '@router/data/RouteList';
import { ListItem } from './ListItem';

export const MenuItem = () => {
  return (
    <React.Fragment>
      {RouteList.map((row, index) => (
        <ListItem 
          key={index}
          path={row.path}
          name={row.name}
          label={row.label}
          component={row.component}
          element={row.element}
          isDrawerMenu={row.isDrawerMenu}
          isDashboardShow={row.isDashboardShow}
          icon={row.icon} 
          groupset={row.groupset}
        />
      ))}
    </React.Fragment>
  );
};
