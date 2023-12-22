// src/components/ResizableBarComponent.js
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import useAutoHide from '../hooks/useAutoHide';
import '../css/ResizableBar.css';

const ResizableBarComponent = ({ onResize }) => {
    const isVisible = useAutoHide(3000);
    const [value, setValue] = useState(100);

    const handleResize = (newValue) => {
        setValue(newValue);
        onResize(newValue);
    };

    const decreaseSize = () => {
        const newValue = Math.max(Number(value) - 10, 50);
        handleResize(newValue);
    };

    const increaseSize = () => {
        const newValue = Math.min(Number(value) + 10, 150);
        handleResize(newValue);
    };

    return (
        <div className={`resizable-bar ${isVisible ? 'visible' : 'hidden'}`}>
            <FaMinus className="resize-icon" onClick={decreaseSize} style={{ cursor: 'zoom-out' }} />
            <input type="range" min="50" max="150" value={value} onChange={(e) => handleResize(e.target.value)} />
            <FaPlus className="resize-icon" onClick={increaseSize} style={{ cursor: 'zoom-in' }} />
        </div>
    );
};

export default ResizableBarComponent;
