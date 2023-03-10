import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Light from '../Light/index.jsx';
import smartHomeData from '../smartHomeData';

const Lights = ({lights}) => {
    return (
        <div className="lights">
            {smartHomeData.lights.map((light) => (
                <Light
                    state={light.state}
                    name={light.name}
                />
            ))}
        </div>
    )
}

export default Lights;