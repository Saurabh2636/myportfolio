import React from "react";
import "./Nav.css";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
const AppBar = () => {
  const History = useHistory();
  return (
    <div className="AppBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ color: "white" }}>
            My Portfolio
          </a>
        </div>
      </nav>
    </div>
  );
};

export default AppBar;
