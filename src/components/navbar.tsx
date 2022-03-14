import React from "react";
import {
  NavbarContainer,
  StyledListItem,
  StyledUl,
} from "./styles/navbar-styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchBar from "./search-bar";

function Navbar() {
  return (
    <Router>
      <NavbarContainer>
        <h1>ShowHub</h1>
        <StyledUl>
          <StyledListItem>
            <Link to="/">Home</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/">Movies</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/tv-series">TV Series</Link>
          </StyledListItem>
        </StyledUl>
        <SearchBar />
      </NavbarContainer>
    </Router>
  );
}

export default Navbar;
