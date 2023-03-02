import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { Sling as Hamburger } from 'hamburger-react'

export const Nav = styled.nav`
    background: #7A5B6F;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #fefae0;
  font-size: 2rem;
  text-decoration: none;

`;

export const NavLink = styled(Link)`
color: #fefae0;
display: flex;
align-items: center;
text-decoration: none;
padding: 10px 22px;
height: 100%;
margin-left: 24px;
cursor: pointer;
&:hover {
  color: black;
}
`;

export const Bars= styled(FaBars)`
  display: none;
  color: #fefae0;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fefae0;
  outline: none;
  border: 1px solid #fefae0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fefae0;
    color: #808080;
  }
`;