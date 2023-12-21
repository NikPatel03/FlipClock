// src/App.js
import React, { useState } from 'react';
import './App.css';
import SidebarComponent from './components/SidebarComponent';
import FlipClockComponent from './components/FlipClockComponent';

function App() {
  const [isTwentyFourHourFormat, setTwentyFourHourFormat] = useState(true);
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTimeFormat = () => {
    setTwentyFourHourFormat(!isTwentyFourHourFormat);
  };

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);

    // Add the class to the body tag
    document.body.classList.toggle('light-theme', isDarkTheme);
  };

  return (
    <div className="App">
      <SidebarComponent toggleTimeFormat={toggleTimeFormat} toggleTheme={toggleTheme} />
      <FlipClockComponent isTwentyFourHourFormat={isTwentyFourHourFormat} />
    </div>
  );
}

export default App;
