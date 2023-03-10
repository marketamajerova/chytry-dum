import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import LightOn from './images/light-on.svg'
import LightOff from './images/light-off.svg'

const Light = ({name, state}) => {
    
   const [stateLight, setStateLight] = useState(state);    

   const handleClick = () => {
        if (stateLight === 'on') {
            setStateLight('off')
        } else {
            setStateLight('on')
        }
   }
    
    return (
        <div className="light" onClick={handleClick}>
            <div className="light__icon">
                <img src = {stateLight === 'on' ? LightOn : LightOff} />
            </div>
            <div className="light__name">
                {name}
            </div>
        </div>
    )
} 

export default Light;