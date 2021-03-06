import React, { useState, useEffect, useContext } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCut, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
import { userContext } from '../../../App';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [logedInUser, setLogedInUser] = useContext(userContext)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>

            Hair<FontAwesomeIcon icon={faCut} />Shine
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/admin'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Admin
              </Link>
            </li>

            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>

          {button && <Button buttonStyle='btn--outline'>{logedInUser.email ? <h5>{logedInUser.name}</h5> : 'Login'}</Button>}

        </div>
      </nav>
    </>
  );
}

export default Navbar;
