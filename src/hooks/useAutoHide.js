// src/hooks/useAutoHide.js
import { useEffect, useState } from 'react';

const useAutoHide = (timeoutDuration = 5000) => {
  const [isVisible, setVisibility] = useState(true);
  let timeoutId;

  const handleMouseMovement = () => {
    setVisibility(true);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setVisibility(false);
    }, timeoutDuration);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMovement);

    return () => {
      document.removeEventListener('mousemove', handleMouseMovement);
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeoutId, timeoutDuration]);

  return isVisible;
};

export default useAutoHide;
