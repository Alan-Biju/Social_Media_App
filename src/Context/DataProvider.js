import React, { createContext, useContext, useState } from 'react';
import storage from 'local-storage-fallback';
import { useAuth } from './AuthProvider';
const DataContext = createContext();
export const useData = () => {
	return useContext(DataContext);
};
const DataProvider = ({ children }) => {
	const { Auth } = useAuth();
	const [photo, setPhoto] = useState(Auth && Auth.photoURL)
    	const InintialTheme = () => {
				const Theme = storage.getItem('Theme');
				return Theme === 'true' ? true : false;
			};
	const [isDarkMode, setIsDarkMode] = useState(InintialTheme());
	///-----------------------------------------------------------------------
	const value = {
		isDarkMode,
		setIsDarkMode,
		photo,
		setPhoto,
	};
	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
