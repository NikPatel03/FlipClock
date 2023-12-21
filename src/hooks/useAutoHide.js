// src/hooks/useAutoHide.js
import { useState, useEffect } from 'react';

const useAutoHide = () => {
  const [isVisible, setVisibility] = useState(true);
  let timeoutId;

  const handleMouseMovement = () => {
    setVisibility(true);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setVisibility(false);
    }, 5000);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMovement);

    return () => {
      document.removeEventListener('mousemove', handleMouseMovement);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isVisible;
};

export default useAutoHide;
