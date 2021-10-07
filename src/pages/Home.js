import React from 'react';
import './Home.css';
import Skills from '../components/Skills';
import Services from '../components/Services.js';

function Home() {
  return (
    <div className="home-container">
      <div className="about-me-section">
        <h3 className="home-title"> About me</h3>
        <p className="about-me-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          auctor feugiat lacus ut aliquet. Vestibulum congue metus nibh, quis
          ultrices sem cursus eget. Phasellus vel interdum sapien. Pellentesque
          vehicula, nibh eget condimentum tincidunt, dui leo volutpat tortor, ac
          consectetur arcu sem ut enim. Aliquam vitae risus nulla. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Mauris velit odio,
          accumsan vitae tincidunt a, tincidunt sed diam. Quisque maximus metus
          eget tortor ultrices porta. Fusce et ullamcorper ligula, ac dictum
          tellus. Ut eget arcu tellus. Suspendisse lobortis odio urna. Proin
          pulvinar non ligula in eleifend.
        </p>
        <br />
        <p className="about-me-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          auctor feugiat lacus ut aliquet. Vestibulum congue metus nibh, quis
          ultrices sem cursus eget. Phasellus vel interdum sapien. Pellentesque
          vehicula, nibh eget condimentum tincidunt, dui leo volutpat tortor, ac
          consectetur arcu sem ut enim. Aliquam vitae risus nulla. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Mauris velit odio,
          accumsan vitae tincidunt a, tincidunt sed diam. Quisque maximus metus
          eget tortor ultrices porta. Fusce et ullamcorper ligula, ac dictum
          tellus. Ut eget arcu tellus. Suspendisse lobortis odio urna. Proin
          pulvinar non ligula in eleifend.
        </p>
      </div>
      <div className="services-section">
        <h3 className="home-title"> My services</h3>
        <Services />
      </div>
      <div className="skills-section">
        <h3 className="home-title"> My skills</h3>
        <Skills />
      </div>
    </div>
  );
}

export default Home;
