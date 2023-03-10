import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Lights from '../Lights';
import Climate from '../Climate';
import Blinds from '../Blinds';
import Energy from '../Energy';


const Dashboard = ({data}) => (

	<main className="dashboard">
		<Lights lights={data.lights}/>
		<Climate />
		<Blinds />
		<Energy />
	</main>
)

export default Dashboard;