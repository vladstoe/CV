import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './InfoPage.css';

const InfoPage = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:v.stoenescu@student.tue.nl';
    };

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/40721258243', '_blank');
    };

    return (
        <div className="info-page">
            <div className="profile-section">
                <div className="profile-picture">
                    <img src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ" alt="Profile" />
                </div>
                <div className="profile-details">
                    <h1 className="profile-name">Vlad Stoenescu</h1>
                    <div className="contact-section">
                        <ul className="contact-list">
                            <li>
                                <i className="fa fa-envelope contact-icon"></i>
                                <span className="nationality">Romanian</span>
                            </li>
                            <li>
                                <i className="fa fa-envelope contact-icon"></i>
                                <span className="contact-info">22 years old</span>
                            </li>
                            <li onClick={handleWhatsAppClick} style={{ cursor: 'pointer' }}>
                                <i className="fa fa-phone contact-icon"></i>
                                <span className="contact-info phone">+40721258243</span>
                            </li>
                            <li onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
                                <i className="fa fa-envelope contact-icon"></i>
                                <span className="contact-info mail">v.stoenescu@student.tue.nl</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="info-section">
                <h2 className="section-title">About Me</h2>
                <div className="section-content">
                    <p>
                        I am a motivated Computer Science student with a passion for technology and a desire to make a difference. Currently pursuing my degree, I have gained a solid understanding of programming languages, algorithms, and software development principles. My coursework has equipped me with strong problem-solving skills and the ability to approach challenges with a logical mindset in security, and data analysis. I am seeking internships or entry-level roles where I can make a meaningful impact while expanding my skill set. With a strong passion for software development, I am ready to contribute to the ever-evolving field of technology.
                    </p>
                </div>
                <div className="profile-social">
                    <a href="https://www.instagram.com/vladstoenescu" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="social-icon instagram-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/vlad-stoenescu-4a854020a/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="social-icon linkedin-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default InfoPage;
