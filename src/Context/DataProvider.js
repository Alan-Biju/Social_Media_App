import React, { createContext, useContext, useState } from 'react';
import storage from 'local-storage-fallback';
import HelperFirestore from '../_FirebaseQueries/HelperFirestore';
const DataContext = createContext();
export const useData = () => {
	return useContext(DataContext);
};
const DataProvider = ({ children }) => {
	const { posts, postImg, profile } = HelperFirestore();
	const InintialTheme = () => {
		const Theme = storage.getItem('Theme');
		return Theme === 'true' ? true : false;
	};
	const [isDarkMode, setIsDarkMode] = useState(InintialTheme());
	const [change, setChange] = useState('');
	const value = {
		isDarkMode,
		setIsDarkMode,
		posts,
		postImg,
		change,
		setChange,
		profile
	};
	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
