import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Styled = {
  Header: styled.header`
    padding: 1rem;
    background-color: #171923;
  `,

  Nav: styled.nav`
    font-size: 80%;
    width: 100%;
  `,

  UnorderedList: styled.ul`
    list-style-type: none;
    display: flex;
    flex-flow: nowrap;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  `,

  ListItem: styled.li`
    &:first-child {
      flex-basis: 100%;
      text-align: center;
      @media screen and (min-width: 850px) {
        flex-basis: auto;
        text-align: left;
        margin-right: auto;
      }
    }
  `,

  Link: styled(Link)`
    padding: 12px;
    cursor: pointer;
    color: white;
    display: block;
    margin-right: 10px;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.1s ease-in;
    font-size: 0.9rem;
    &:hover {
      background-color: #1a202c;
    }
  `,

  LogoLink: styled(Link)`
    font-size: 30px;
    flex-basis: 100%;
    display: block;
    color: white;
    font-weight: bold;
    text-decoration: none;
  `,

  Icon: styled(FontAwesomeIcon)`
    font-size: 25px;
    margin-right: 10px;
    cursor: pointer;
  `,
};
