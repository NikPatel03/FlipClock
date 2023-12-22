import React, { useEffect, useRef } from 'react';
import FlipClock from 'flipclock';
import '../css/FlipClock.css';

const FlipClockComponent = ({ isTwentyFourHourFormat, size }) => {
  const clockElementRef = useRef(null);

  useEffect(() => {
    const clockElement = clockElementRef.current;

    if (!clockElement) return;

    clockElement.style.transform = `scale(${size / 70})`;

    // Clear the existing content before initializing a new FlipClock
    clockElement.innerHTML = '';

    // Use the appropriate clock face based on the time format
    const clockFace = isTwentyFourHourFormat ? 'TwentyFourHourClock' : 'TwelveHourClock';

    const clock = new FlipClock(clockElement, new Date(), {
      face: clockFace,
      // Customize other clock settings here
    });

    return () => clock.stop();
  }, [clockElementRef, isTwentyFourHourFormat, size]);

  return <div className="clock" ref={clockElementRef}></div>;
};

export default FlipClockComponent;