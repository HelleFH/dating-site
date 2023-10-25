import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the FontAwesome icons
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Bars = styled(FaBars)`
  display: none;
  color:  #333333;
  align-self: center;
  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 1.8rem;
    cursor: pointer;
    margin-left:0.3em;
  }
`;

const Bar = styled.nav`
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  min-height: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  z-index:9999;
  background-color: rgb(103, 213, 181);
  margin:0;
  position:relative;
  font-family: 'Roboto', sans-serif;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    width:100%;
    background-color: rgb(103, 213, 181);
  }
`;

const MainNav = styled.ul`
  list-style-type: none;
  display: ${(props) => (props.display)};
  flex-direction: column;
  background: rgb(222, 216, 162);
  background-color: rgb(103, 213, 181);
  position: absolute;
  z-index: 9999;
  top: 40px;
  width: 100vw;
  transition: transform 0.3s ease;
  transform: translateY(${(props) => (props.display === "flex" ? "none" : "-100%")});
  border-radius: 0 0 5px 5px;
  margin:0;
  padding:0;

  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
    background-color: rgb(103, 213, 181,0.99);

flex-wrap:wrap;
align-items:center;
height:70px;

width:100%;
margin:25px 0px 0px 0px;
  }
`;

const NavLi = styled.li`
  text-align: center;
  margin: 1.5em auto;
  position: relative;

  a {
    font-weight: 400;
  }
  a:visited {color:black;}
  
  @media screen and (max-width: 768px) {

    a {
      font-weight: 600;
    }  }
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
  color: #333333;
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
      <Bar className="nav-fa-bars">
        <NavBarToggle className="navbar-toggle" onClick={() => setOpen(!open)}>
          <Bars />
        </NavBarToggle>

        {open && <CloseButton className="navbar-close-button" onClick={closeMenu} />} {/* Close button */}

        <MainNav display={open ? "flex" : "none"}>
          <NavLi>
            <NavLink to="/home" onClick={closeMenu} activeStyle={{ color: "red" }}>
              <img className="menu-logo" src="./images/logo.png" />
            </NavLink>
          </NavLi>

          <NavLi>
            <NavLink to="/findmatches" onClick={closeMenu} activeStyle={{ color: "red" }}>
              Find matches
            </NavLink>
          </NavLi>

          <NavLi>
            <NavLink to="/favorites" onClick={closeMenu} activeStyle={{ color: "red" }}>
              Favorites
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/about" onClick={closeMenu} activeStyle={{ color: "red" }}>
              Profile
            </NavLink>
          </NavLi>
          <NavLi className="signup-menu-item">
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