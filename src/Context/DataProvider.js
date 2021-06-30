import React, { createContext, useContext, useEffect, useState } from 'react';
import storage from 'local-storage-fallback';
import HelperFirestore from '../_FirebaseQueries/HelperFirestore';
import { useAuth } from './AuthProvider';
const DataContext = createContext();
export const useData = () => {
	return useContext(DataContext);
};
const DataProvider = ({ children }) => {
	const { Auth } = useAuth();
	const { posts, postImg, profile } = HelperFirestore();
	const [isverified, setIsverified] = useState();

	//---------------------------darkMood-------------------
	const InintialTheme = () => {
		const Theme = storage.getItem('Theme');
		return Theme === 'true' ? true : false;
	};
	const [isDarkMode, setIsDarkMode] = useState(InintialTheme());
	const [change, setChange] = useState('');
	//-------------------------------verified----------------------------
	useEffect(() => {
		if (Auth) {
			setIsverified(Auth.emailVerified);
		}
	}, [Auth]);
	//-------------------------value-----------------------------------------
	const value = {
		isDarkMode,
		setIsDarkMode,
		posts,
		postImg,
		change,
		setChange,
		profile,
		isverified,
	};
	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
