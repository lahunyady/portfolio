import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
         <nav className="navbar">
             <div className="navbar-container">
                 <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                     <i className="fab fa-typo3"></i>
                 </Link>
                 <div className="menu-icon" onClick={handleClick}>
                     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                 </div>
                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                     <li className='nav-item'>
                         <Link to='/about-me' className='nav-links' onClick={closeMobileMenu}>
                            Rólam
                         </Link>
                    </li>
                    <li>
                         <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                             Projektek
                         </Link>
                    </li>
                    <li>
                         <Link to='/coding-challenges' className='nav-links' onClick={closeMobileMenu}>
                             Kódolási feladatok
                         </Link>
                    </li>
                    <li>
                         <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                             Kapcsolat
                         </Link>
                    </li>
                 </ul>
             </div>
         </nav>
        </>
    )
}

export default Navbar
