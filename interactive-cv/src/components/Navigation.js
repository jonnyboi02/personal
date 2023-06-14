import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">Experience</NavLink>
        </li>
        <li>
          <NavLink to="/education" activeClassName="active">Education</NavLink>
        </li>
        <li>
          <NavLink to="/skills" activeClassName="active">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
