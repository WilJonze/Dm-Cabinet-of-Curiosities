import React from "react";
import { Sling as Hamburger } from 'hamburger-react';

function Navbar() {
    return (
        <>
        <nav className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onclick="closeNav()"> &times; </a>
            <a href="#">About</a>
            <a href="#">Code</a>
            <a href="#">Feedback</a>
        </nav>
        <Hamburger  onToggle={toggle => {
            if (toggle) {
                
                    document.getElementById("sidenav").style.width = "250px";
                
            } else {
                
                    document.getElementById("sidenav").style.width = "0";
                
            }
        }}/>
    </>
    )
}


  

export default Navbar;