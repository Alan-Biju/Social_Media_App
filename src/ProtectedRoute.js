import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import NavBar from './Components/NavBar.js/NavBar';
import { useAuth } from './Context/AuthProvider';
const ProtectedRoute = ({ Component, ...rest }) => {
	const { Auth } = useAuth();
	return (
		<Route
			{...rest}
			render={() => {
				return Auth ? (
					<>
						<NavBar />
						<Component />
					</>
				) : (
					<Redirect to='/Login' />
				);
			}}
		/>
	);
};

export default ProtectedRoute;
