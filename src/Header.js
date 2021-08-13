import './Header.css';
import logo from './images/logo.png';
import menuIcon from './images/menu.svg';
import closeIcon from './images/close.svg';

import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

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
            <NavHashLink
              key={`nav-${i.hash}`}
              activeClassName={location.hash === i.hash ? 'active-nav' : ''}
              to={i.hash}
            >
              {i.text}
            </NavHashLink>
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
                <li key={`menu-${i.hash}`}>
                  <NavHashLink
                    onClick={closeMenu}
                    activeClassName={
                      location.hash === i.hash ? 'active-menu' : ''
                    }
                    to={i.hash}
                  >
                    {i.text}
                  </NavHashLink>
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
