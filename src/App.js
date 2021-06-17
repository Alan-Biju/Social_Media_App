import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import storage from 'local-storage-fallback';
import ProtectedRoute from './ProtectedRoute';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Reset from './Components/Reset/Reset';
import { LightTheme, DarkTheme } from './Themes';
import Home from './Components/Home.js/Home';
import Error404 from './Reusable/Error404';
const App = () => {

	const InintialTheme = () => {
		const Theme = storage.getItem('Theme');
		return Theme === 'true' ? true : false;
	};
	const [isDarkMode /* setIsDarkMode */] = useState(InintialTheme());
	useEffect(() => {
		storage.setItem('Theme', isDarkMode);
	}, [isDarkMode]);
	return (
		<ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
			<AppContainer>
				<Switch>
					<Route exact path='/Login'>
						<Login />
					</Route>
					<Route exact path='/SignUp'>
						<Register />
					</Route>
					<Route exact path='/Reset'>
						<Reset />
					</Route>
					<ProtectedRoute exact path='/' Component={Home} />
					<ProtectedRoute exact path='/AddPost' Component={Login} />
					<ProtectedRoute exact path='/Profile' Component={Login} />
					<Route path='*'>
						<Error404/>
					</Route>
				</Switch>
			</AppContainer>
		</ThemeProvider>
	);
};

export default App;
const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #f2f2f2;
`;

