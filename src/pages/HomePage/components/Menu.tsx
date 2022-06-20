import * as React from 'react';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import InboxIcon from '@mui/material/Icon';
import { useNavigate } from 'react-router-dom';
import RouteList from '@router/data/RouteList';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

export const Menu = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      {RouteList.map((row, index) => (
        <ListItemButton key={index} onClick={() => navigate(row.path)}>
          <ListItemIcon>
            <row.icon />
          </ListItemIcon>
          <ListItemText primary={row.label} style={{ color: 'white' }} />
        </ListItemButton>
      ))}
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </React.Fragment>
  );
};
