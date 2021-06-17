import React, { createContext, useContext, useState } from 'react';
import storage from 'local-storage-fallback';
const DataContext = createContext();
export const useData = () => {
	return useContext(DataContext);
};
const DataProvider = ({ children }) => {
    	const InintialTheme = () => {
				const Theme = storage.getItem('Theme');
				return Theme === 'true' ? true : false;
			};
	const [isDarkMode, setIsDarkMode] = useState(InintialTheme());
	///-----------------------------------------------------------------------
	const value = {
		isDarkMode,
		setIsDarkMode,
	};
	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
