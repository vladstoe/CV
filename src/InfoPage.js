import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './InfoPage.css';

const InfoPage = () => {
  const [clickedCount, setClickedCount] = useState(0);
  const maxClicksToShowFlag = 5; // Change this to set the number of clicks required
  const [showFlag, setShowFlag] = useState(false);
  const [remainingClicks, setRemainingClicks] = useState(maxClicksToShowFlag);

  const handleEmailClick = () => {
    window.location.href = 'mailto:v.stoenescu@student.tue.nl';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/40721258243', '_blank');
  };

  const handleRomanianClick = () => {
    setClickedCount((prevCount) => prevCount + 1);
  };

  const resetClickCounter = () => {
    setClickedCount(0);
  };

  useEffect(() => {
    if (clickedCount >= maxClicksToShowFlag) {
      setShowFlag(true);
      setRemainingClicks(0);
      setTimeout(() => {
        setShowFlag(false);
        setRemainingClicks(maxClicksToShowFlag);
      }, 5000); // 5 seconds delay before hiding the flag
    } else {
      setRemainingClicks(maxClicksToShowFlag - clickedCount);
    }
  }, [clickedCount]);

  return (
    <div className="info-page">
      <div className="profile-section">
        <div className="profile-picture">
          <img src="https://i.ibb.co/NYRX5jn/Whats-App-Image-2023-09-03-at-17-35-20-2.jpg" alt="Profile" />
        </div>
        <div className="profile-details">
          <h1 className="profile-name">Vlad Stoenescu</h1>
          <div className="contact-section">
            <ul className="contact-list">
              <li onClick={handleRomanianClick} onMouseLeave={resetClickCounter} style={{ cursor: 'pointer' }}>
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
            {remainingClicks > 0 && clickedCount > 0 && (
              <p>{`${remainingClicks} clicks left`}</p>
            )}
          </div>
        </div>
      </div>
      <div className="info-section">
        <h2 className="section-title">About Me</h2>
        <div className="section-content">
          <p>
            I am a motivated Computer Science student from Romania with a passion for technology and a desire to make a difference. Currently pursuing my degree, I have gained a solid understanding of programming languages, algorithms, and software development principles. My coursework has equipped me with strong problem-solving skills and the ability to approach challenges with a logical mindset in security, and data analysis. I am seeking entry-level roles where I can make a meaningful impact while expanding my skill set. With a strong passion for software development, I am ready to contribute to the ever-evolving field of technology.
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
      {showFlag && (
        <div className={`romanian-flag ${showFlag ? 'flag-visible' : ''}`}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACqCAMAAABVlWm8AAAACVBMVEUAK3/80RbOESaEDa1tAAAAxklEQVR4nO3PMQEAAAjAILV/aFPsgwbMFLZwhaTv7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v75/+HwW0qVdTeFEnAAAAAElFTkSuQmCC" alt="Romanian Flag" />
        </div>
      )}
    </div>
  );
};

export default InfoPage;
