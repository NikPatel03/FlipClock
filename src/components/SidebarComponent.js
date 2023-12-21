// src/components/SidebarComponent.js
import React, { useState } from 'react';
import '../css/Sidebar.css';
import { FaClock, FaAdjust, FaMusic, FaLink, FaFacebook, FaInstagram } from 'react-icons/fa'; // Import required icons
import { FaExpand, FaCompress } from 'react-icons/fa';
import myPortfolioLogo from '../my-portfolio-logo.svg';
import useAutoHide from '../hooks/useAutoHide';


const SidebarComponent = ({ toggleTimeFormat, toggleTheme, toggleMusicPlayer }) => {
  const isSidebarVisible = useAutoHide();

  const [isFullscreen, setFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }

    setFullscreen(!isFullscreen);
  };

  const adjustTimeCardSize = () => {
    // Add logic for adjusting time card size
  };

  const handleSocialMediaClick = (socialMedia) => {
    const socialMediaLinks = {
      Facebook: 'https://www.facebook.com/mire.patel',
      Instagram: 'https://www.instagram.com/_mire_patel_/',
      Portfolio: 'https://mirepatel-portfolio.netlify.app/',
    };

    const link = socialMediaLinks[socialMedia];

    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}>
      <button onClick={toggleFullscreen}>
        {isFullscreen ? <FaCompress /> : <FaExpand />}
      </button>
      <button onClick={toggleTimeFormat}>
        <FaClock />
      </button>
      <button onClick={toggleTheme}><FaAdjust /></button>
      <button onClick={toggleMusicPlayer}><FaMusic /></button>
      <button onClick={adjustTimeCardSize}><FaLink /></button>

      <div className="social-media-buttons">
        <button onClick={() => handleSocialMediaClick('Facebook')}>
          <FaFacebook />
        </button>
        <button onClick={() => handleSocialMediaClick('Instagram')}>
          <FaInstagram />
        </button>
        <button onClick={() => handleSocialMediaClick('Portfolio')}>
        <img src={myPortfolioLogo} alt="Portfolio" style={{ width: '20px', height: '20px' }}/>
          {/* <FaExternalLinkAlt className="external-link-icon" /> */}
        </button>
      </div>
    </div>
  );
};

export default SidebarComponent;
