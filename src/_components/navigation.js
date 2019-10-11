import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Navigation extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex nav-main justify-content-center align-items-center">
          <NavLink to="entry" activeClassName="current">
            Nota de Entrada
          </NavLink>
          <NavLink to="exit" activeClassName="current">
            Nota de Salida
          </NavLink>
          <NavLink to="list" activeClassName="current">
            Cheking list
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;
