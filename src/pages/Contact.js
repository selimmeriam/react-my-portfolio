import React, { useState, useRef } from 'react';
import { profileData } from '../DataArray';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EmailIcon from '@mui/icons-material/Email';
import MyButton from '../components/MyButton';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';

import './Contact.css';
function Contact() {
  const [data, setData] = useState(profileData);
  const formRef = useRef();

  return (
    <div className="contact-container">
      <div className="contact-section">
        <h3 className="contact-title"> Contact</h3>

        {data.map((el, index) => {
          return (
            <div className="contact-desc" key={index}>
              <div className="cont-line">
                <span className="contact-icon">
                  <DriveFileRenameOutlineIcon fontSize="small" />
                </span>
                <span className="contact-desc-title">Name: </span>
                <p className="cont-desc">{el.name}</p>
              </div>
              <div className="cont-line">
                <span className="contact-icon">
                  <HomeIcon fontSize="small" />
                </span>
                <span className="contact-desc-title">Address: </span>
                <p className="cont-desc">{el.address}</p>
              </div>
              <div className="cont-line">
                <span className="contact-icon">
                  <PhoneAndroidIcon fontSize="small" />
                </span>
                <span className="contact-desc-title">Phone: </span>
                <p className="cont-desc">{el.tele}</p>
              </div>
              <div className="cont-line">
                <span className="contact-icon">
                  <EmailIcon fontSize="small" />
                </span>
                <span className="contact-desc-title">Email: </span>
                <p className="cont-desc">{el.email}</p>
              </div>
              <div className="cont-line">
                <span className="contact-icon">
                  <WorkIcon fontSize="small" />
                </span>
                <span className="contact-desc-title">Job: </span>
                <p className="cont-desc">{el.job}</p>
              </div>

              <div className="mobile-icons desc-social">
                <ul className="mobile-icon-list">
                  <li className="mobile-icon-item">
                    <a
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={el.socials.facebook.link}
                    >
                      <i className={el.socials.facebook.icon}></i>
                    </a>
                  </li>
                  <li className="mobile-icon-item">
                    <a
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={el.socials.twitter.link}
                    >
                      <i className={el.socials.twitter.icon}></i>
                    </a>
                  </li>
                  <li className="mobile-icon-item">
                    <a
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={el.socials.dribble.link}
                    >
                      <i className={el.socials.dribble.icon}></i>
                    </a>
                  </li>
                  <li className="mobile-icon-item">
                    <a
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={el.socials.github.link}
                    >
                      <i className={el.socials.github.icon}></i>
                    </a>
                  </li>
                  <li className="mobile-icon-item">
                    <a
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={el.socials.linkedIn.link}
                    >
                      <i className={el.socials.linkedIn.icon}></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}

        <h3 className="contact-title"> Contact Form</h3>

        <form ref={formRef}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Subject" name="user_subject" />
          <input type="email" placeholder="E-mail" name="user_email" />
          <textarea rows="5" placeholder="Message" name="message" />
          <MyButton
            text={'Sumbit'}
            icon={<i className="fas fa-paper-plane sidebar-button-icon"></i>}
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
