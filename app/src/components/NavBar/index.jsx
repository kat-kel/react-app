import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElements";


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to='/'>
                    LostMa
                </NavLogo>
            </Nav>
            <Bars />
            <NavMenu>
                <NavLink
                    to='/'
                    activeStyle={{ color:'blue' }}
                >
                    Home
                </NavLink>
                <NavLink
                    to='/cycles'
                    activeStyle={{ color:'blue' }}
                >
                    Cycles
                </NavLink>
                <NavLink
                    to='/works'
                    activeStyle={{ color:'blue' }}
                >
                    Works
                </NavLink>
                <NavLink
                    to='/texts'
                    activeStyle={{ color:'blue' }}
                >
                    Texts
                </NavLink>
                <NavLink
                    to='/about'
                    activeStyle={{ color:'blue' }}
                >
                    About
                </NavLink>
            </NavMenu>
        </>
    )
}

export default Navbar;