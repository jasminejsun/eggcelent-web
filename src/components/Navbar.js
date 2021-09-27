import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
   
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        <span className='logo-font' onClick= 
                        {closeMobileMenu}>
                        eggcelent
                        </span>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                <span className='header-font'>
                                    home
                                </span>
                            </Link>
                            </li>
                            <li className='nav-item'>
                            <Link to='/puns' className='nav-links' onClick={closeMobileMenu}>
                                <span className="header-font">
                                    puns
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
