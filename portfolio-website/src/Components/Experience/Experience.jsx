import React from 'react'
import styles from './Experience.module.css';

import javascript_img from "../../Assets/skills/Javascript_image.png";
import react_img from "../../Assets/skills/React_image.png";
import node_img from "../../Assets/skills/Node.js_image.png";
import html_img from "../../Assets/skills/html_image.png";
import css_img from "../../Assets/skills/css_image.png";
import mongo_img from "../../Assets/skills/Mongo_image.png";
import c_img from "../../Assets/skills/c++_image.png";
import python_img from "../../Assets/skills/python_image.png";
import r_img from "../../Assets/skills/r_image.png";
import figma_img from "../../Assets/skills/figma_image.png";
import powerbi_img from "../../Assets/skills/powerbi_image.png";



export const Experience = () => {
  return (
    <section className={styles.container} id='skills'>
        <div className={styles.content}>
            <h2 className={styles.title}> Tools That I work With</h2>

            <ul className={styles.images}>
                <li> <img src={javascript_img} alt="" /> </li>
                <li> <img src={react_img} alt="" /> </li>
                <li> <img src={node_img} alt="" /> </li>
                <li> <img src={html_img} alt="" /> </li>
            </ul>

            <ul className={styles.images}>
                <li> <img src={css_img} alt="" /> </li>
                <li> <img src={mongo_img} alt="" /> </li>
                <li> <img src={c_img} alt="" /> </li>
                <li> <img src={python_img} alt="" /> </li>
            </ul>

            <ul className={styles.images}>
                <li> <img src={r_img} alt="" /> </li>
                <li> <img src={figma_img} alt="" /> </li>
                <li> <img src={powerbi_img} alt="" /> </li>
            </ul>
            
            <a className={styles.cvBtn} href="Neel_Jhangiani_CV.pdf" download> Download CV</a>
        </div>
    </section>
  )
}
