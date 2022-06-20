import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate, useLocation } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List } from '@mui/material';
import { RoutesObject } from '@router/data/RoutesObject';

const CollapsibleMenu = (isOpened: boolean, children: RoutesObject) => {

  const navigate = useNavigate();
  
  const handleClick = (path: string) => {
    const destination = `${children.path}/${path}`;
    navigate(destination);
  };

  if (children.groupset.length > 0) {
    // <List component="div" disablePadding>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <StarBorder />
    //         </ListItemIcon>
    //         <ListItemText primary="Starred" />
    //       </ListItemButton>
    //     </List>
    return (
      <Collapse in={isOpened} timeout="auto" unmountOnExit>
        {children.groupset.map((el, index) => (
          <List component="div" disablePadding key={index}>
            <ListItemButton onClick={() => handleClick(el.path)}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={el.label} />
            </ListItemButton>
          </List>
        ))}
      </Collapse>
    );
  }
};

const ListTitle = (isOpened: boolean, groupsetLength: number) => {
  if (groupsetLength > 0) {
    return (
      <React.Fragment>
        {isOpened ? <ExpandLess /> : <ExpandMore />}
      </React.Fragment>
    );
  }
};

export const ListItem = (props: RoutesObject) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    if (props.groupset.length > 0) {
      setOpen(!open);
    } else {
      navigate(`${props.path}`);
    }
  };

  return (
    <React.Fragment>
      <ListItemButton
        onClick={handleClick}
        selected={location.pathname === props.path}
      >
        <ListItemIcon>
          <props.icon />
        </ListItemIcon>
        <ListItemText primary={props.label} />
        {ListTitle(open, props.groupset.length)}
      </ListItemButton>
      {CollapsibleMenu(open, props)}
    </React.Fragment>
  );
};
