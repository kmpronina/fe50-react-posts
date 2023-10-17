import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '#constants/routes';
import { HeaderStyled } from './HeaderStyled';

const Header = () => {
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

  return (
    <HeaderStyled>
      {links.map(({ id, href, children }) => (
        <NavLink key={id} to={href}>
          {children}
        </NavLink>
      ))}
    </HeaderStyled>
  );
};
export default Header;
