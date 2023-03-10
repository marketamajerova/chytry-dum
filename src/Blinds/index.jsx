import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import BlindsClosed from './images/blinds-closed.svg'
import BlindsOpen from './images/blinds-open.svg'


const Blinds = ({ state }) => {

    const [blindsState, setBlindsState] = useState(state);

    const handleOpen = () => {
        setBlindsState('open');
    }

    const handleClose = () => {
        setBlindsState('close');
    }

    return (<div className="blinds">
        <div className="blinds__icon">
            <img src={blindsState === 'open' ? BlindsOpen : BlindsClosed} />
        </div>
        <div className="blinds__name">
            Žaluzie
        </div>
        <div className="blinds__controls">
            <button className={blindsState === 'open' ? "button button--active" : "button"} onClick={handleOpen}>Otevřeno</button>
            <button className={blindsState === 'close' ? "button button--active" : "button"} onClick={handleClose}>Zavřeno</button>
        </div>
    </div>)
}


export default Blinds;