// src/App.js
import React, { useState } from 'react';
import './App.css';
import SidebarComponent from './components/SidebarComponent';
import FlipClockComponent from './components/FlipClockComponent';
import MusicPlayerComponent from './components/MusicPlayerComponent';

function App() {
  const [isTwentyFourHourFormat, setTwentyFourHourFormat] = useState(true);
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);

  const toggleTimeFormat = () => {
    setTwentyFourHourFormat(!isTwentyFourHourFormat);
  };

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);

    // Add the class to the body tag
    document.body.classList.toggle('light-theme', isDarkTheme);
  };

  const toggleMusicPlayer = () => {
    setShowMusicPlayer(!showMusicPlayer);
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <SidebarComponent
        toggleTimeFormat={toggleTimeFormat}
        toggleTheme={toggleTheme}
        toggleMusicPlayer={toggleMusicPlayer}
      />
      <FlipClockComponent isTwentyFourHourFormat={isTwentyFourHourFormat} />
      {showMusicPlayer && <MusicPlayerComponent onClose={toggleMusicPlayer} />}
    </div>
  );
}

export default App;
