import React from 'react'
import styles from './Home.module.css';

import car_img from '../../Assets/home/car.png';

export const Home = () => {
  return (
    <section className={styles.container} id='home'>
        <div className={styles.content}>
            <h1 className={styles.title}> Hello, I'm Neel Jhangiani</h1>
            <p className={styles.description}>
                Software Developer | 
                Data Science & Machine Learning Enthusiast
            </p>

            <a 
                href="mailto:neel.jhangiani1@gmail.com" 
                className={styles.contactBtn}> Contact
            </a>
        </div>

        <img src={car_img} alt="" className={styles.carImg} />

        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

    </section>
  );
};
