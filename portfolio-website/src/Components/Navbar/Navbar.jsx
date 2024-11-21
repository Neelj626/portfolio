import React, {useState, useEffect} from 'react'

import styles from './Navbar.module.css';

import home_button from '../../Assets/nav/Home_button.png';
import menu_icon from '../../Assets/nav/menu_icon.png';
import close_icon from '../../Assets/nav/close_icon.png';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            
            <a className={styles.home} href="#home">
                <img 
                    src={home_button} 
                    alt='Home'
                    onClick={() => setMenuOpen(false)}
                />
            </a>
            
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={menuOpen ? close_icon : menu_icon} 
                    alt='Menu'
                    onClick={() =>setMenuOpen(!menuOpen)}
                />
                <ul 
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about"> About</a>
                    </li>
                    <li>
                        <a href="#skills"> Skills</a>
                    </li>
                    <li>
                        <a href="#projects"> Projects</a>
                    </li>
                    <li>
                        <a href="#contact"> Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};