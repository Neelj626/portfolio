import React from 'react'
import styles from "./Contact.module.css";

import email_icon from "../../Assets/contact/email.png";
import github_icon from "../../Assets/contact/github.png";
import linkedin_icon from "../../Assets/contact/linkedin.png";



export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>
                Feel free to contact me with any questions and 
                I will get back as soon as possible 
            </p>
        </div>
        
        <ul className={styles.links}>
            <li className={styles.link}>
                <img 
                    src={email_icon} 
                    alt="" 
                    width={50}
                    height={50}
                />
                <a href="mailto:neel.jhangiani1@gmail.com">neel.jhangiani1@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img 
                    src={linkedin_icon} 
                    alt=""
                    width={50}
                    height={50}
                />
                <a href="https://www.linkedin.com/in/neel-jhangiani">linkedin.com/neel-jhangiani</a>
            </li>

            <li className={styles.link}>
                <img 
                    src={github_icon} 
                    alt="" 
                    width={50}
                    height={50}
                />
                <a href="https://www.github.com/Neelj626">github.com/Neelj626</a>
            </li>
        </ul>
    </footer>
  );
}
