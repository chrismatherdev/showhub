import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 80px;
  padding: 0 25px;
  margin: 0 auto;
`;

export const NavBackground = styled.div`
  width: 100%;
  background-color: #2d3748;
`;

export const NavWidth25 = styled.div`
  width: 25%;
`;

export const NavWidth50 = styled.div`
  width: 50%;
  text-align: center;
`;

export const NavMenu = styled.div`
  /* align-items: center; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  padding: 12px;
  cursor: pointer;
  color: white;
  margin-right: 10px;
  background-color: #2d3748;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: lightblue;
  }
`;

export const LogoLink = styled(Link)`
  font-size: 40px;
  font-weight: bold;
  text-decoration: none;
  color: white;
`;

export const StyledShowIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 2rem;
  margin-right: 10px;
  cursor: pointer;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;
