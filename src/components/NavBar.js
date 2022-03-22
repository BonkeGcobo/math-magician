import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Quote',
      text: 'Quote',
    },
  ];

  return (
    <header className="header">
      <h1 className="heading">Math Magicians</h1>
      <nav className="nav">
        <ul className="NavLinks">
          {links.map((link) => (
            <li key={link.id} className="link">
              <NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
