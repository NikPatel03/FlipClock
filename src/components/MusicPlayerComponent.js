// src/components/MusicPlayerComponent.js
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { FiMaximize, FiMinus } from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";
import { CgClose, CgMusicNote } from "react-icons/cg";
import { RiDraggable } from "react-icons/ri";
import useAutoHide from '../hooks/useAutoHide';
import '../css/MusicPlayer.css';

const MusicPlayerComponent = ({ onClose }) => {
    const isVisible = useAutoHide(10000);
    const [isMinimized, setMinimized] = useState(false);

    const handleMinimize = () => {
        const lofiPlayer = document.getElementById('lofi_player');
        lofiPlayer.style.display = lofiPlayer.style.display === 'none' ? 'block' : 'none';
        setMinimized(!isMinimized);
    };

    const handleMaximize = () => {
        const lofiPlayer = document.getElementById('lofi_player');
        lofiPlayer.style.display = 'block';
        setMinimized(false);
    };

    return (
        <Draggable handle=".handle">
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
                    <button className="tooltip-btn" onClick={handleMinimize} data-tooltip="Music Player">
                        <CgMusicNote />
                    </button>
                    <RxDividerVertical className="vertical-bar" />
                    <button
                        className="tooltip-btn handle"
                        data-tooltip="Drag to Reposition"
                        style={{ cursor: 'grab' }}
                        onMouseDown={(e) => (e.target.style.cursor = 'grabbing')}
                        onMouseUp={(e) => (e.target.style.cursor = 'grab')}
                    >
                        <RiDraggable />
                    </button>

                    <button className="tooltip-btn" onClick={isMinimized ? handleMaximize : handleMinimize} data-tooltip={isMinimized ? 'Maximize Player' : 'Minimize Player'}>
                        {isMinimized ? <FiMaximize /> : <FiMinus />}
                    </button>
                    <button className="tooltip-btn" onClick={onClose} data-tooltip="Close Music Player">
                        <CgClose />
                    </button>
                </div>
            </div>
        </Draggable>
    );
};

export default MusicPlayerComponent;
