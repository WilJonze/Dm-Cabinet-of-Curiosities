import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import { Sling as Hamburger } from 'hamburger-react'

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Monster Mash
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/"
                  activeStyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/about"
                  activeStyle={{ color: 'black' }}
                >
                    About
                </NavLink>
                <NavLink 
                  to="/contact" 
                  activeStyle={{ color: 'black' }}
                >
                    Contact
                </NavLink>
                <NavLink 
                  to="/feedback" 
                  activeStyle={{ color: 'black' }}
                >
                    Feedback
                </NavLink>
               
            </NavMenu>
           </Nav> 
        </>
    );
};
export default Navbar;