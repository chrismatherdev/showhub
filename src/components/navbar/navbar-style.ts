import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledNav = styled.nav`
  font-size: 80%;
  padding: 1rem;
  @media screen and (min-width: 850px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: nowrap;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const StyledLi = styled.li`
  &:first-child {
    flex-basis: 100%;
    text-align: center;
    @media screen and (min-width: 850px) {
      flex-basis: auto;
      text-align: left;
      margin-right: auto;
    }
  }
`;

export const NavLink = styled(Link)`
  padding: 12px;
  cursor: pointer;
  color: white;
  display: block;
  margin-right: 10px;
  background-color: #2d3748;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.1s ease-in;
  font-size: 0.9rem;
  &:hover {
    background-color: #1a202c;
  }
`;

export const LogoLink = styled(Link)`
  font-size: 40px;
  flex-basis: 100%;
  color: black;
  display: block;
  font-weight: bold;
  text-decoration: none;
`;

export const ShowIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 2rem;
  margin-right: 10px;
  cursor: pointer;
`;
