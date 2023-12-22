// src/App.js
import React, { useState } from 'react';
import './App.css';
import SidebarComponent from './components/SidebarComponent';
import FlipClockComponent from './components/FlipClockComponent';
import MusicPlayerComponent from './components/MusicPlayerComponent';
import ResizableBarComponent from './components/ResizableBarComponent';


function App() {
  const [isTwentyFourHourFormat, setTwentyFourHourFormat] = useState(true);
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);
  const [isResizableBarVisible, setResizableBarVisibility] = useState(false);
  const [clockSize, setClockSize] = useState(100);

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

  const toggleResizableBar = () => {
    setResizableBarVisibility(!isResizableBarVisible);
  };

  const handleClockResize = (newSize) => {
    setClockSize(newSize);
  };


  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <SidebarComponent
        toggleTimeFormat={toggleTimeFormat}
        toggleTheme={toggleTheme}
        toggleMusicPlayer={toggleMusicPlayer}
        toggleResizableBar={toggleResizableBar}
      />
      <FlipClockComponent isTwentyFourHourFormat={isTwentyFourHourFormat} size={clockSize} />
      {showMusicPlayer && <MusicPlayerComponent onClose={toggleMusicPlayer} />}
      {isResizableBarVisible && <ResizableBarComponent onResize={handleClockResize} />}
    </div>
  );
}

export default App;
