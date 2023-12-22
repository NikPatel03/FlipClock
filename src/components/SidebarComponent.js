// src/components/SidebarComponent.js
import React, { useState } from 'react';
import '../css/Sidebar.css';
import { BiLogoFacebook } from "react-icons/bi";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { RxHalf2 } from "react-icons/rx";
import { PiMagnifyingGlassPlusBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FiMinimize, FiMaximize } from "react-icons/fi";
import useAutoHide from '../hooks/useAutoHide';


const SidebarComponent = ({ toggleTimeFormat, toggleTheme, toggleMusicPlayer, toggleResizableBar }) => {
  const isSidebarVisible = useAutoHide();

  const [isFullscreen, setFullscreen] = useState(false);
  const [isTwelveHourFormat, setTwelveHourFormat] = useState(true);


  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }

    setFullscreen(!isFullscreen);
  };

  const toggleClockFormat = () => {
    setTwelveHourFormat(!isTwelveHourFormat);
    toggleTimeFormat(); // Call your function to handle time format toggle
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
      <button className="tooltip-btn" onClick={toggleFullscreen} data-tooltip={isFullscreen ? 'Exit Full Screen' : 'Enter Full Screen'}>
        {isFullscreen ? <FiMinimize /> : <FiMaximize />}
      </button>
      <button className="tooltip-btn" onClick={toggleClockFormat} data-tooltip={isTwelveHourFormat ? 'Switch to 12-Hour Format' : 'Switch to 24-Hour Format'}>
        {isTwelveHourFormat ?
          (
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12a9 9 0 0 0 9 9m9 -9a9 9 0 1 0 -18 0M12 7v5l.5 .5M18 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2M15 21v-6"></path>
            </svg>
          ) : (
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12a9 9 0 0 0 5.998 8.485m12.002 -8.485a9 9 0 1 0 -18 0M12 7v5M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2M18 15v2a1 1 0 0 0 1 1h1M21 15v6"></path>
            </svg>
          )}
      </button>
      <button className="tooltip-btn" onClick={toggleTheme} data-tooltip="Change Theme"><RxHalf2 /></button>
      <button className="tooltip-btn" onClick={toggleMusicPlayer} data-tooltip="Open Music Player"><BsMusicNoteBeamed /></button>
      <button className="tooltip-btn" onClick={toggleResizableBar} data-tooltip="Resize Clock"><PiMagnifyingGlassPlusBold /></button>

      <div className="social-media-buttons">
        <button className="tooltip-btn" onClick={() => handleSocialMediaClick('Facebook')} data-tooltip="Facebook">
          <BiLogoFacebook />
        </button>
        <button className="tooltip-btn" onClick={() => handleSocialMediaClick('Instagram')} data-tooltip="Instagram">
          <FaInstagram />
        </button>
        <button className="tooltip-btn" onClick={() => handleSocialMediaClick('Portfolio')} data-tooltip="Designed by Mire">
          <svg className="myPortfolioIcon" width="25" height="25" viewBox="0 0 5000 4000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4500 0L2500 4000L1750 2500L3000 0H4500ZM2000 0L1500 3000L2000 4000H500L0 3000L500 0H2000ZM3000 4000L4625 750L5000 3000L4500 4000H3000Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SidebarComponent;
