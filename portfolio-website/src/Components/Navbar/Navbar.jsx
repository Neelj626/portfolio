import React, {useState, useEffect} from 'react'

import styles from './Navbar.module.css';

import home_button from '../../Assets/nav/Home_button.png';
import menu_icon from '../../Assets/nav/menu_icon.png';
import close_icon from '../../Assets/nav/close_icon.png';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
            },
            { threshold: 0.5 } // Adjust threshold to detect when 50% of the section is in view
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <nav className={styles.navbar}>
            
            <a className={styles.home} href="#home">
                <img 
                    src={home_button} 
                    alt=''
                    onClick={() => setMenuOpen(false)}
                />
            </a>
            
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={menuOpen ? close_icon : menu_icon} 
                    alt=""
                    onClick={() =>setMenuOpen(!menuOpen)}
                />
                <ul 
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a 
                            href="#about" 
                            className={activeSection === "about" ? styles.active : ""}
                        > About</a>
                    </li>
                    <li>
                        <a 
                            href="#skills" 
                            className={activeSection === "skills" ? styles.active : ""}
                        > Skills</a>
                    </li>
                    <li>
                        <a 
                            href="#projects" 
                            className={activeSection === "projects" ? styles.active : ""}
                        > Projects</a>
                    </li>
                    <li>
                        <a 
                            href="#contact" 
                            className={activeSection === "contact" ? styles.active : ""}
                        > Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};