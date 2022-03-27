import React, { useState } from "react";
import {
  Bars,
  NavContainer,
  Nav,
  NavbarExtendedContainer,
  NavbarLinkExtended,
  NavMenu,
  NavLink,
  LogoLink,
  OpenLinksButton,
} from "./styles/navbar-styles";
import SearchShow from "./search-show";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavContainer>
      <Nav>
        <LogoLink to="/">ShowHub</LogoLink>
        <Bars />
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
        <SearchShow />
        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/movies">Movies</NavbarLinkExtended>
            <NavbarLinkExtended to="/tv-series">TV Series</NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </Nav>
    </NavContainer>
  );
}

export default Navbar;
