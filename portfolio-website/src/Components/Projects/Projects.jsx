import React from 'react'
import styles from './Projects.module.css';

import chef_img from "../../Assets/projects/chef_chaos.jpg";
import data_img from "../../Assets/projects/Data_analysis.png";
import hail_img from "../../Assets/projects/hailstorm.png";
import leuf_img from "../../Assets/projects/leuf.png";


export const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}> My Work</h2>
      <p className={styles.subTitle}> A collection of projects that I've worked on</p>
      <div className={styles.content}>
        <div className={styles.project}>
          <h2 className={styles.ProjectTitle}> University Crimes</h2>
          <p className={styles.description}>
            A team collaboration to examine the impacts of crime 
            on university campuses across the United States, 
            drawing on data from over 1,000 institutions. 
            Utilizing predictive modeling and machine learning 
            techniques like K-Nearest Neighbors and Support Vector 
            Machines.
          </p>

          <img 
            src={data_img} 
            alt="" 
            className={styles.images}
            width={311}
            height={200}
          />

          <a 
            className={styles.projectBtn} 
            href="https://docs.google.com/document/d/1UcG-sdkwvGypY4Vgl64e4ctn4wNl-wT7t6LwKfNK1iE/pub"> See Project
          </a>
        </div>

        <div className={styles.project}>
          <h2 className={styles.ProjectTitle}> LEUF</h2>
          <p className={styles.description}>
            In this web development project, my team and I 
            created a software application that predicts fuel 
            rates by factoring in client location, history, 
            gallons requested, and company profit margin. The 
            application includes essential features like login, 
            client registration, profile management, a fuel quote 
            form with a pricing module, and a fuel quote history.
          </p>

          <img 
            src={leuf_img} 
            alt="" 
            className={styles.images}
            width={311}
            height={200}
          />

          <a 
            className={styles.projectBtn} 
            href="https://github.com/Software-Design-Group38/LEUF"> See Project
          </a>
        </div>

        <div className={styles.project}>
          <h2 className={styles.ProjectTitle}> Chef Chaos</h2>
          <p className={styles.description}>
            In collaboration with a team of seven to develop 
            an immersive mixed-reality cooking game for the Meta 
            Quest platform, a project that received recognition 
            through a recommendation for the Oculus Start program 
            and continued development under Meta's funding. 
            Leveraging Unity, the Mixed Reality Toolkit, and 
            Meta Building Blocks to create a captivating 
            experience that brings players together in a shared, 
            dynamic environment.
          </p>

          <img 
            src={chef_img} 
            alt="" 
            className={styles.images}
            width={311}
            height={200}
          />

          <a 
            className={styles.projectBtn} 
            href="https://github.com/francisvtran/COSC-4321-Virtual-Chefs"> See Project
          </a>
        </div>
        
        <div className={styles.project}>
          <h2 className={styles.ProjectTitle}> Hailstorm</h2>
          <p className={styles.description}>
            An engaging game on Code.org where players dodge 
            falling objects, which quickly gained popularity, 
            reaching 100 plays in its first month. This project 
            allowed me to blend creative design with technical 
            problem-solving, delivering a fun, seamless 
            experience for players.
          </p>

          <img 
            src={hail_img} 
            alt="" 
            className={styles.hailImage}
            width={311}
            height={300}
          />

          <a 
            className={styles.projectBtn} 
            href="https://studio.code.org/projects/applab/4gSu9v9QWTp9UAVACLV9nx3MYMYXrE0nd6ba4WHIu-Q"> See Project
          </a>
        </div>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}
