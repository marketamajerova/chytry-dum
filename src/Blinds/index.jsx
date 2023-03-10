import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import BlindsClosed from './images/blinds-closed.svg'
import BlindsOpen from './images/blinds-open.svg'


const Blinds = () =>

(<div className="blinds">
    <div className="blinds__icon">
        <img src={BlindsOpen} />
    </div>
    <div className="blinds__name">
        Žaluzie
    </div>
    <div className="blinds__controls">
        <button className="button button--active">Otevřeno</button>
        <button className="button">Zavřeno</button>
    </div>
</div>)


export default Blinds;