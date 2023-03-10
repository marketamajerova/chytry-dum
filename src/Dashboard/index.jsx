import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Lights from '../Lights';


const Dashboard = ({data}) => (
	<main className="dashboard">
		<Lights />
	</main>
)

export default Dashboard;