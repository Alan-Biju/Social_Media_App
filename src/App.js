import { useEffect, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import storage from 'local-storage-fallback';
import ProtectedRoute from './ProtectedRoute';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { lightTheme, darkTheme } from './Themes';
import { useData } from './Context/DataProvider';
import LoadingIcon from './Reusable/LoadingIcon';
const Home = lazy(() => import('./Pages/Home'));
const Error404 = lazy(() => import('./Reusable/Error404'));
const Reset = lazy(() => import('./Pages/Reset'));
const AddPost = lazy(() => import('./Pages/AddPost'));
const Profile = lazy(() => import('./Pages/Profile'))
const Settings=lazy(()=>import('./Pages/Settings'))
const App = () => {
	const { isDarkMode } = useData();
	useEffect(() => {
		storage.setItem('Theme', isDarkMode);
	}, [isDarkMode]);
	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<AppContainer>
				<Suspense fallback={<LoadingIcon />}>
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
						<ProtectedRoute exact path='/AddPost' Component={AddPost} />
						<ProtectedRoute exact path='/Profile' Component={Profile} />
						<ProtectedRoute exact path='/Settings' Component={Settings} />

						<Route path='*'>
							<Error404 />
						</Route>
					</Switch>
				</Suspense>
			</AppContainer>
		</ThemeProvider>
	);
};

export default App;
const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	transition: background-color 0.5s ease;
	background-color: ${(prop) => prop.theme.mainBackground};
`;
