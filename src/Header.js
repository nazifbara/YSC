import './Header.css';
import logo from './logo.png';
import menuIcon from './menu.svg';
import closeIcon from './close.svg';

import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [
    {
      text: 'Qui sommes-nous?',
      hash: '#about',
    },
    {
      text: 'Pourquoi existons-nous?',
      hash: '#why',
    },
    {
      text: 'Nos services',
      hash: '#services',
    },
    {
      text: 'Programmes periodiques',
      hash: '#programs',
    },
    {
      text: 'Frais des formations',
      hash: '#pricing',
    },
  ];

  return (
    <div className="container">
      <header>
        <div>
          <img src={logo} className="logo" alt="logo" />
        </div>
        <nav>
          {navItems.map((i) => (
            <NavLink
              key={`nav-${i.hash}`}
              activeClassName={location.hash === i.hash ? 'active-nav' : ''}
              to={i.hash}
            >
              {i.text}
            </NavLink>
          ))}
        </nav>
        <button onClick={openMenu} id="menu-open">
          <img src={menuIcon} alt="menu icon" />
        </button>
      </header>
      {menuOpen && (
        <div id="overlay">
          <div id="menu">
            <button onClick={closeMenu} id="menu-close">
              <img src={closeIcon} alt="close icon" />
            </button>
            <ul>
              {navItems.map((i) => (
                <li>
                  <NavLink
                    key={`menu-${i.hash}`}
                    onClick={closeMenu}
                    activeClassName={
                      location.hash === i.hash ? 'active-menu' : ''
                    }
                    to={i.hash}
                  >
                    {i.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;