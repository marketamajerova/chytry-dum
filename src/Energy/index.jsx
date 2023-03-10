import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Electricity from './images/electricity.svg'
import Water from './images/water.svg'


const Energy = () =>

    (<div className="energy">
        <div className="energy__source">
            <div className="energy__icon">
                <img src={Electricity}/>
            </div>
            <div className="energy__consumption">
                <div className="energy__description">Elektřina</div>
                <div className="energy__value">36.7 kW</div>
            </div>
        </div>
        <div className="energy__source">
            <div className="energy__icon">
                <img src={Water}/>
            </div>
            <div className="energy__consumption">
                <div className="energy__description">Voda</div>
                <div className="energy__value">14.1 m<sup>3</sup></div>
            </div>
        </div>
    </div>)

export default Energy;