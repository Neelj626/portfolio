import React from 'react'
import styles from './About.module.css';

import uh_img from '../../Assets/about/uh_logo.png';
import motorcycle_img from '../../Assets/about/motorcycle.png';


export const About = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h2 className={styles.title}> Who I Am</h2>

            <img 
                src={uh_img} 
                alt=""
                width="192" height="120"
                className={styles.uhImg}
            />

            <p className={styles.description}>
                I'm a recent graduate in Computer Science from the 
                University of Houston, passionate about exploring the 
                endless possibilities of data science and machine learning. 
                I have a strong foundation in full-stack development and 
                enjoy creating data-driven applications. Learning new 
                technologies and diving deep into code are what drive me!
            </p>
        </div>
        
        <div className={styles.content}>
            <h2 className={styles.title}> My Interests</h2>

            <img 
                src={motorcycle_img} 
                width="192" height="120"
                className={styles.motorcyleImg}
            />

            <p className={styles.description}>
                Data Science & Machine Learning: I'm passionate about 
                building models and working with data to derive actionable 
                insights.
            </p>

            <p className={styles.description}>
                Software Development: I Love working across the stack to 
                design, develop, and deploy full-fledged applications.
            </p>

            <p className={styles.description}>
                Learning & Growth: I'm always looking to expand my 
                knowledge and skills — whether it's diving into a new 
                framework or honing my data analysis abilities.
            </p>
        </div>
        
    </section>
  );
}
