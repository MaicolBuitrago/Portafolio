import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import profilePhoto from '../assets/Yo.jpeg';
import React from 'react';

const Sidebar = () => {
  const userInfo = {
    name: "Jean Michael Buitrago Henao",
    title: "Tecnologo en Desarrollo de Software",
    photo: profilePhoto,
    email: "maicolbuitrago674@gmail.com",
    phone: "+57 310 828 7279",
    location: "Caicedonia, Colombia",
    linkedin: "https://www.linkedin.com/in/michael-buitrago-henao-9969222b6/?trk=opento_sprofile_topcard",
    github: "https://github.com/MaicolBuitrago"
  };

  return (
    <div className="sidebar">
      <div className="profile-section">
        <div className="photo-container">
          <img 
            src={userInfo.photo} 
            alt={userInfo.name} 
            className="profile-photo" 
          />
        </div>
        
        <div className="user-info">
          <h1 className="user-name">{userInfo.name}</h1>
          <h2 className="user-title">{userInfo.title}</h2>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>{userInfo.phone}</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>{userInfo.location}</span>
          </div>
          <div className="contact-item">
            <FaLinkedin className="contact-icon linkedin" />
            <a href={userInfo.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="contact-item">
            <FaGithub className="contact-icon github" />
            <a href={userInfo.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;