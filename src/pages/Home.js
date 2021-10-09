import React from 'react';
import './Home.css';
import Skills from '../components/Skills';
import Services from '../components/Services.js';

function Home() {
  return (
    <div className="home-container">
       <div className="about-me-section">
              <h3 className="home-title"> About me</h3>
              <p className='about-me-desc'>Hello. I'm <b>Meriam selim</b>; a highly motivated Software Developer de Egipto, leaning heavily on the <em><b>Frontend</b></em> side and in love with all-things JavaScript <img className="emoji" alt="heart" height="15" width="15" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"></img> But can also create a wonderful <em><b>FullStack</b></em> Websites. Currently I'm working as <b>Freelancer</b> - sometimes from home, sometimes from a cafe, sometimes from a cowork space  - and totally passionate about developing working applications that impact millions of users with <b>ReactJS</b>.</p>
              {/*<br/>*/}
              <p className='about-me-desc'>I love working with dedicated people, write reliable and maintainable code and learn how to become a better programmer – every day. Since I started my career, I developed a special love for JavaScript  <img className="emoji" alt="heart" height="15" width="15" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"></img> </p>
              <p className='about-me-desc'>What I enjoy most in coding is to strive for perfection: Plan, organize and improve the software code of my projects. Fixing bugs if that means I can refactore code. Clean up, optimize and then delete some code. </p>
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
