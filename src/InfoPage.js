import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './InfoPage.css';

const InfoPage = () => {
  const [clickedCount, setClickedCount] = useState(0);
  const maxClicksToShowFlag = 5; // Change this to set the number of clicks required
  const [showFlag, setShowFlag] = useState(false);
  const [remainingClicks, setRemainingClicks] = useState(maxClicksToShowFlag);

  const handleEmailClick = () => {
    window.location.href = 'mailto:vladmstoenescu6@gmail.com';
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
          <p className="profile-name">Vlad Stoenescu</p>
          <div className="contact-section">
            <ul className="contact-list">
              <li onClick={handleRomanianClick} onMouseLeave={resetClickCounter} style={{ cursor: 'pointer' }}>
                <i className="fa fa-envelope contact-icon"></i>
                <span className="nationality">Romanian</span>
              </li>
              <li>
                <i className="fa fa-envelope contact-icon"></i>
                <span className="contact-info">24 years old</span>
              </li>
              <li onClick={handleWhatsAppClick} style={{ cursor: 'pointer' }}>
                <i className="fa fa-phone contact-icon"></i>
                <span className="contact-info phone">+40721258243</span>
              </li>
              <li onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
                <i className="fa fa-envelope contact-icon"></i>
                <span className="contact-info mail">vladmstoenescu6@gmail.com</span>
              </li>
              <li>
                <i className="fa fa-envelope contact-icon"></i>
                <span className="contact-info" style={{ marginRight: '8px' }}>
                  Located in Eindhoven, Netherlands
                </span>
                <span className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="white" d="M12 0c-3.313 0-6 2.687-6 6 0 2.972 2.164 5.433 5 5.91v6.09h2v-6.089c2.836-.477 5-2.938 5-5.91 0-3.314-2.687-6.001-6-6.001zm-.707 4.508c-.549.65-1.423.8-1.953.333s-.516-1.372.034-2.022c.548-.65 1.422-.799 1.952-.333.53.467.515 1.372-.033 2.022zm12.707 19.492l-6.707-2.427-5.293 2.427-5.581-2.427-6.419 2.427 4-9 5-1.979v2.125l-3.502 1.41-1.725 3.88 2.672-1.01 1.506-2.687-.635 3.044 4.189 1.789.495-2.022.465 2.024 4.15-1.89-.618-3.033 1.572 2.896 2.732.989-1.739-3.978-3.562-1.415v-2.122l5.064 1.979 3.936 9z" />
                  </svg>
                </span>
              </li>
            </ul>
            {remainingClicks > 0 && clickedCount > 0 && (
              <p style={{ color: 'white' }}>{`${remainingClicks} clicks left`}</p>
            )}
          </div>
        </div>
      </div>
      <div className="info-section">
        <h2 className="section-title">About Me</h2>
        <div className="section-content">
          <p>
            I am a motivated Computer Science student from Romania with a passion for technology and a desire to make a difference. Currently pursuing my Master's degree in Computer Science, I have gained a solid understanding of programming languages, algorithms, and software development principles through my Bachelor's studies in the same field. My coursework has equipped me with strong problem-solving skills and the ability to approach challenges with a logical mindset in security, and data analysis. I am seeking entry-level roles where I can make a meaningful impact while expanding my skill set. With a strong passion for software development, I am ready to contribute to the ever-evolving field of technology.
          </p>
        </div>
        <div className="profile-social">
          <a href="https://github.com/vladstoe" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="social-icon github-icon" />
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
