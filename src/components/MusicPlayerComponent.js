// src/components/MusicPlayerComponent.js
import React from 'react';
import { FaWindowMinimize, FaWindowClose, FaMusic } from 'react-icons/fa';
import useAutoHide from '../hooks/useAutoHide';
import '../css/MusicPlayer.css';

const MusicPlayerComponent = ({ onClose }) => {
    const isVisible = useAutoHide();

    const handleMinimize = () => {
        // Toggle visibility without changing the minimized state
        const lofiPlayer = document.getElementById('lofi_player');
        lofiPlayer.style.display = lofiPlayer.style.display === 'none' ? 'block' : 'none';
    };

    return (
        <div className={`music-player-window ${isVisible ? 'visible' : 'hidden'}`}>
            <iframe
                id="lofi_player"
                title="YouTube Music Player"
                frameBorder="0"
                width="400px"
                height="250px"
                src="https://www.youtube.com/embed/YQs7IVvvVYw"
            ></iframe>
            <div className="player-controls">
                <button onClick={handleMinimize}>
                    <FaMusic />
                </button>
                <button onClick={handleMinimize}>
                    <FaWindowMinimize />
                </button>
                <button onClick={onClose}>
                    <FaWindowClose />
                </button>
            </div>
        </div>
    );
};

export default MusicPlayerComponent;
