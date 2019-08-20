import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// TODO: Add missing tabs below
export default function TabNav() {
  const Nav = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    border-bottom: 1px solid black;
    padding-top:2rem;
    .nz-nav-link {
      text-align:center;
      width:20%;
      height:30px;
      color:black;
      font-size:1.4rem;
      padding:10px;
      &:hover {
        border-top: 1px solid grey;
        border-right: 2px solid grey;
        border-left: 2px solid grey;
      }
    }
  `;

  return (
    <Nav>
      <NavLink exact to="/" className="nz-nav-link" activeClassName='active'>
        HomePage
      </NavLink>
      <NavLink exact to="/character-list" className="nz-nav-link">
        Character
      </NavLink>
      <NavLink exact to="/location-list" className="nz-nav-link">
        Locations
      </NavLink>
      <NavLink exact to="/episode-list" className="nz-nav-link">
        Episodes
      </NavLink>
    </Nav>
  );
}
