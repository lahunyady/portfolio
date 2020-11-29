import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';
import { useTranslation } from "react-i18next";

function Navbar() {
    const { t } = useTranslation();
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
         <nav className="navbar">
             <div className="custom-home-icon">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <i className="fas fa-home"></i>
                </Link>
            </div>
             <div className="navbar-container">
                 
                 <div className="menu-icon" onClick={handleClick}>
                     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                 </div>
                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                     <li className='nav-item'>
                         <Link to='/about-me' className='nav-links' onClick={closeMobileMenu}>
                         {t("About Me")}
                         </Link>
                    </li>
                    <li>
                         <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                         {t("Projects")}
                         </Link>
                    </li>
                    <li>
                         <Link to='/coding-challenges' className='nav-links' onClick={closeMobileMenu}>
                             
                             {t("Coding Challenges")}
                         </Link>
                    </li>
                    <li>
                         <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                             {t("Contact")}
                         </Link>
                    </li>
                    <li className='nav-links'>
                        <LanguageSwitcher/>
                    </li>
                 </ul>
             </div>
         </nav>
        </>
    )
}

export default Navbar
