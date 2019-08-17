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
    padding: 10px;
    .nz-nav-link {
      &:active {
        border: 1px solid grey;
      }
    }
  `;

  return (
    <Nav>
      <NavLink to="/" className="nz-nav-link">
        HomePage
      </NavLink>
      <NavLink to="/character-list" className="nz-nav-link">
        Character
      </NavLink>
      <NavLink to="/location-list" className="nz-nav-link">
        Locations
      </NavLink>
      <NavLink to="/episode-list" className="nz-nav-link">
        Episodes
      </NavLink>
    </Nav>
  );
}
