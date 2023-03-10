import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import smartHomeData from './smartHomeData.js';
import Header from './Header';
import Dashboard from './Dashboard';


const App = () => (
  <div className="container">
    <Header />
    <Dashboard data={smartHomeData}/>
  </div>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);