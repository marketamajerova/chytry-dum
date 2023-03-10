import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import LightOn from './images/light-on.svg'
import LightOff from './images/light-off.svg'

const Light = ({name, state}) => {
    
   const [lightState, setLightState] = useState('on');    
    
    return (
        <div className="light" onclick="setLightState">
            <div className="light__icon">
                <img src = {
                    state === "on" ? LightOn : LightOff
                    } />
            </div>
            <div className="light__name">
                {name}
            </div>
        </div>
    )
} 

export default Light;