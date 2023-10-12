import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the FontAwesome icons
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  align-self: center;
  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const Bar = styled.nav`
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 45px;
  display: flex;
  align-items: center;
  width: 100%;
  background: rgb(222, 216, 162);
  background: linear-gradient(
    90deg,
    rgba(222, 216, 162, 1) 0%,
    rgba(202, 193, 106, 1) 35%,
    rgba(189, 178, 70, 1) 100%
  );

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
  }
`;

const MainNav = styled.ul`
  list-style-type: none;
  display: ${(props) => (props.display)};
  flex-direction: column;
  background: rgb(222, 216, 162);
  background: linear-gradient(
    90deg,
    rgba(222, 216, 162, 1) 0%,
    rgba(202, 193, 106, 1) 35%,
    rgba(189, 178, 70, 1) 100%
  );
  position: absolute;
  z-index: 9999;
  top: 45px;
  width: 100%;
  transition: transform 0.3s ease;
  transform: translateY(${(props) => (props.display === "flex" ? "0" : "-100%")});
  border-radius: 0 0 5px 5px;

  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const NavLi = styled.li`
  text-align: center;
  margin: 15px auto;
  position: relative;
  padding-bottom: 1em;

  a {
    font-weight: 600;
  }
`;

const NavBarToggle = styled.span`
  position: relative;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
`;

const CloseButton = styled(FaTimes)` // Define the close button styling
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #808080;
  z-index: 1;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const Navbar = () => {
    const [open, setOpen] = useState(false);
  
    // Function to close the menu
    const closeMenu = () => {
      setOpen(false);
    };
  
    useEffect(() => {
      if (!open) {
        // Perform an action when the menu is closed
      }
    }, [open]);
  
    return (
      <>
        <Bar>
          <NavBarToggle onClick={() => setOpen(!open)}>
            <Bars />
          </NavBarToggle>
  
          {open && <CloseButton onClick={closeMenu} />} {/* Close button */}
          
          <MainNav display={open ? "flex" : "none"}>
            <NavLi>
              <NavLink to="/about" onClick={closeMenu} activeStyle={{ color: "red" }}>
                About
              </NavLink>
            </NavLi>
            <NavLi>
              <NavLink to="/findmatches" onClick={closeMenu} activeStyle={{ color: "red" }}>
                Find matches
              </NavLink>
            </NavLi>
            <NavLi>
              <NavLink to="/profile" onClick={closeMenu} activeStyle={{ color: "red" }}>
                Profile
              </NavLink>
            </NavLi>
            <NavLi>
              <NavLink to="/favorites" onClick={closeMenu} activeStyle={{ color: "red" }}>
                Favorites
              </NavLink>
            </NavLi>
            <NavLi>
              <NavLink to="/matchProfile" onClick={closeMenu} activeStyle={{ color: "red" }}>
                Match Profile
              </NavLink>
            </NavLi>
            <NavLi>
              <NavLink to="/sign-up" onClick={closeMenu} activeStyle={{ color: "red" }}>
                Sign Up
              </NavLink>
            </NavLi>
          </MainNav>
        </Bar>
      </>
    );
  };
  
  export default Navbar;