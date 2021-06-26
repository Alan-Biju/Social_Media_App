import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import { useAuth } from './Context/AuthProvider';
const ProtectedRoute = ({ Component, ...rest }) => {
	const { Auth } = useAuth();
	return (
		<>
			 <NavBar />
			<Route
				{...rest}
				render={() => {
					return Auth ? <Component /> : <Redirect to='/Login' />;
				}}
			/>
		</>
	);
};

export default ProtectedRoute;
