import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Temp from './images/temp.svg'


const Climate = ({ temperature, humidity }) => {

    const [tempe, setTempe] = useState(temperature);


    const handleClickPlus = () => {
        setTempe(tempe + 1);
    }

    const handleClickMinus = () => {
        setTempe(tempe - 1);
    }
    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={Temp} />
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{tempe}&deg;C</div>
                <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button" onClick={handleClickPlus}>+</button>
                <button className="button" onClick={handleClickMinus}>-</button>
            </div>
        </div>)
}


export default Climate;