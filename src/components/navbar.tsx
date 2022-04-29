import React, { useState } from 'react';
import {
  Bars,
  Nav,
  NavbarExtendedContainer,
  NavbarLinkExtended,
  NavMenu,
  NavLink,
  NavWidth25,
  NavWidth50,
  LogoLink,
  OpenLinksButton,
} from './styles/navbar-styles';
import SearchShow from './search/search-show';

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <Nav>
      <NavWidth25>
        <LogoLink to="/">
          ShowHub
        </LogoLink>
      </NavWidth25>
  
      <Bars />

      <NavWidth50>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/tv-series">TV Series</NavLink>
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
        </NavMenu>
      </NavWidth50>

      <NavWidth25>
        <SearchShow />
      </NavWidth25>

      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/movies">Movies</NavbarLinkExtended>
          <NavbarLinkExtended to="/tv-series">TV Series</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </Nav>
  );
}

export default Navbar;
