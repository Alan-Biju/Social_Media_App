import React, { createContext, useContext, useEffect, useState } from 'react';
import db, { auth } from '../Firebase';
const AuthContext = createContext();
export const useAuth = () => {
	return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
	const [Auth, setAuth] = useState();
	const [Load, setLoad] = useState(true);

	///-------------------------------------Login function---------------------------------
	const login = (email, password) => {
		return auth.signInWithEmailAndPassword(email, password);
	};
	///---------------------------------Register function------------------------------------
	const register = async (email, password, name) => {
		const res = await auth.createUserWithEmailAndPassword(email, password);
		if (res) {
			console.log(res);
			await db
				.collection(`users`)
				.doc(res.user.uid)
				.collection('Profile')
				.doc('details')
				.set({
					name: name,
					website: '',
					bio: '',
					uid: res.user.uid,
					photoUrl: '',
				});
		}
	};
	///-------------------------------------Reset-------------------------------------
	const reset = (email) => {
		return auth.sendPasswordResetEmail(email);
	};
	///-----------------------------------signOut-----------------------------------------
	const signOut = () => {
		return auth.signOut();
	};

	///------------------------Auth check from fire base--------------------------------------
	useEffect(() => {
		const isUser = auth.onAuthStateChanged((user) => {
			setAuth(user);
			setLoad(false);

			return isUser;
		});
	}, []);
	//--------------------------------values ----------------------------------------------------
	const value = {
		Auth,
		login,
		register,
		reset,
		signOut,
	};
	return (
		<AuthContext.Provider value={value}>
			{!Load && children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
