import React from 'react'

import uh_img from '../../Assets/about/uh_logo.png';

export const About = () => {
  return (
    <section>
        <div>
            <h2 >Who I Am</h2>

            <img 
                src={uh_img} 
                alt=""
                width="192" height="120"
            />

            <p>
                I'm a recent graduate in Computer Science from the 
                University of Houston, passionate about exploring the 
                endless possibilities of data science and machine learning. 
                I have a strong foundation in full-stack development and 
                enjoy creating data-driven applications. Learning new 
                technologies and diving deep into code are what drive me!
            </p>
        </div>
        
        <div>
            <h2>My Interests</h2>
            <p>
                Data Science & Machine Learning: I'm passionate about 
                building models and working with data to derive actionable 
                insights.
            </p>

            <p>
                Software Development: I Love working across the stack to 
                design, develop, and deploy full-fledged applications.
            </p>

            <p>
                Learning & Growth: I'm always looking to expand my 
                knowledge and skills — whether it's diving into a new 
                framework or honing my data analysis abilities.
            </p>

            <img 
                src="https://clipart-library.com/images/8izngdgrT.png" 
                width="192" height="120" 
            />
        </div>
        
    </section>
  );
}
