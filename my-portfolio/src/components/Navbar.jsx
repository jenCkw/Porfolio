import React from "react";
import logojenny from "../images/logojenny.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Container>
      <nav>
        <img src={logojenny} alt="" srcset="" />

        <ul>
          <Link to="/">
            <li className={window.location.pathname === "/" ? "active" : ""}>
              Accueil
            </li>
          </Link>

          <Link to="/about">
            <li
              className={window.location.pathname === "/about" ? "active" : ""}
            >
              A propos
            </li>
          </Link>

          <Link to="/skills">
            <li
              className={window.location.pathname === "/skills" ? "active" : ""}
            >
              Competences
            </li>
          </Link>

          <Link to="/portfolio">
            <li
              className={
                window.location.pathname === "/portfolio" ? "active" : ""
              }
            >
              Realisations
            </li>
          </Link>

          <Link to="/contacts">
            <li
              className={
                window.location.pathname === "/contacts" ? "active" : ""
              }
            >
              Contacts
            </li>
          </Link>
        </ul>
      </nav>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  nav {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 70%;
  }

  li {
    margin-left: 2rem;
    list-style: none;
    font-size: 20px;
    font-family: Roboto;
    color: #f8379b;
    text-decoration: none;
    padding-bottom: 5px;

    &:hover {
      border-bottom-width: 2px;
      border-bottom-style: solid;
      border-bottom-color: #dcaa00;
    }
  }

  .active {
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #dcaa00;
  }

  img {
    height: 60px;
  }

  Link {
    text-decoration: none;
  }
`;

export default Navbar;
