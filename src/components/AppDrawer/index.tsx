import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { MenuItem } from '../layout/auth/partials/MenuItem';
import Logo from '../Logo';

const drawerWidth: number = 240;

export function AppDrawer(props: { toggleDrawer: () => void, isOpen: boolean }) {

  console.log("Props open => ", props.isOpen);

  const Drawer = styled(MuiDrawer, {
      shouldForwardProp: prop => prop !== 'open',
    })(({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('xl')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }));

  return(
    <Drawer variant="permanent" open={props.isOpen}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <Logo height="40px" />
        <IconButton onClick={props.toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <MenuItem />
      </List>
    </Drawer>
  );
  
}