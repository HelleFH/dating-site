import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/findmatches" activeStyle>
                        Find matches
                    </NavLink>
                    <NavLink to="/profile" activeStyle>
                        Profile
                    </NavLink>
                    <NavLink to="/favorites" activeStyle>
                        Favorites
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                    <NavLink>FaBars</NavLink>
                </NavMenu>
                <button>
                <faBars /> {/* Render the Bars component */}

                </button>
            </Nav>
        </>
    );
};
 
export default Navbar;