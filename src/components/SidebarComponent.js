// src/components/SidebarComponent.js
import React, { useState, useEffect } from 'react';
import '../css/Sidebar.css'; 
import { FaClock, FaAdjust, FaMusic, FaLink } from 'react-icons/fa'; // Import required icons
import { FaExpand, FaCompress } from 'react-icons/fa';

const SidebarComponent = ({ toggleTimeFormat, toggleTheme }) => {
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  useEffect(() => {
    let timeoutId;

    const handleMouseMovement = () => {
      setSidebarVisibility(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setSidebarVisibility(false);
      }, 5000);
    };

    document.addEventListener('mousemove', handleMouseMovement);

    return () => {
      document.removeEventListener('mousemove', handleMouseMovement);
    };
  }, []);

//  -----------
const [isFullscreen, setFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }

    setFullscreen(!isFullscreen);
  };
  // ---------



  const toggleMusicScreen = () => {
    // Add logic for toggling music screen
  };

  const adjustTimeCardSize = () => {
    // Add logic for adjusting time card size
  };

  const handleSocialMediaClick = (socialMedia) => {
    // Add logic for handling social media button clicks
    console.log(`Clicked on ${socialMedia}`);
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
      <button onClick={toggleMusicScreen}><FaMusic /></button>
      <button onClick={adjustTimeCardSize}><FaLink /></button>

      <div className="social-media-buttons">
        <button onClick={() => handleSocialMediaClick('Facebook')}>Facebook</button>
        <button onClick={() => handleSocialMediaClick('Twitter')}>Twitter</button>
        <button onClick={() => handleSocialMediaClick('Instagram')}>Instagram</button>
      </div>
    </div>
  );
};

export default SidebarComponent;
