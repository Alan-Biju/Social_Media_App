import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import DataProvider from './Context/DataProvider';
ReactDOM.render(
	<AuthProvider>
		<DataProvider>
			<Router>
				<App />
			</Router>
		</DataProvider>
	</AuthProvider>,
	document.getElementById('root'),
);
