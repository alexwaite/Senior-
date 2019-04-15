import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/campuses">
            Campuses
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/students">
            Students
          </NavLink>
        </li>
      </ul>
    );
  }
}
