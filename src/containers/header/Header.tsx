import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '#constants/routes';
import { HeaderStyled } from './HeaderStyled';
import Autocomplete from '#components/autocomplete';

interface Props {
  window?: () => Window;
}
const Header: React.FC<Props> = (props) => {
  const { window } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const links = [
    {
      id: 1,
      href: ROUTES.HOME,
      children: 'All posts',
    },
    {
      id: 2,
      href: ROUTES.FAVPOSTS,
      children: 'Favorite posts',
    },
  ];

  const handleDrawerToggle = () => {
    setOpenMenu(!openMenu);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {links.map(({ id, href, children }) => (
          <ListItem key={id}>
            <ListItemButton>
              <NavLink
                key={id}
                to={href}
                style={{
                  color: '#002d62',
                  textTransform: 'uppercase',
                  fontSize: '24px',
                  textDecoration: 'none',
                  fontWeight: '700',
                }}
              >
                {children}
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <HeaderStyled>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        container={container}
        variant="temporary"
        open={openMenu}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '25%' },
        }}
      >
        {drawer}
      </Drawer>
      <Autocomplete />
      {/* {links.map(({ id, href, children }) => (
        <NavLink key={id} to={href}>
          {children}
        </NavLink> */}
      {/* ))} */}
    </HeaderStyled>
  );
};
export default Header;
