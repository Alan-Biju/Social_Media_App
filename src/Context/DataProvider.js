import React, { createContext, useContext, useEffect, useState } from 'react';
import storage from 'local-storage-fallback';
import { useAuth } from './AuthProvider';
import HelperFirestore from '../_FirebaseQueries/HelperFirestore';
const DataContext = createContext();
export const useData = () => {
	return useContext(DataContext);
};
const DataProvider = ({ children }) => {
	const { Auth } = useAuth();
	const { posts, postImg } = HelperFirestore();
	const [photo, setPhoto] = useState(Auth && Auth.photoURL);
	const InintialTheme = () => {
		const Theme = storage.getItem('Theme');
		return Theme === 'true' ? true : false;
	};
	const [isDarkMode, setIsDarkMode] = useState(InintialTheme());
	const [change, setChange] = useState('');
	///--------------------------------------profile setup------
	useEffect(() => {
		if (Auth) {
			setPhoto(Auth.photoURL);
		}
	}, [Auth]);
	///-----------------------------------------------------------------------
	const value = {
		isDarkMode,
		setIsDarkMode,
		photo,
		setPhoto,
		posts,
		postImg,
		change,
		setChange,
	};
	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
