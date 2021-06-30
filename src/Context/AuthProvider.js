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
	const login = async (email, password) => {
		return await auth.signInWithEmailAndPassword(email, password);
	};
	///---------------------------------Register function------------------------------------
	const register = async (email, password, name) => {
		const res = await auth.createUserWithEmailAndPassword(email, password);
		if (res) {
			console.log(res);
			db.collection(`users`)
				.doc(res.user.uid)
				.collection('Profile')
				.doc('details')
				.set({
					name: name,
					website: '',
					bio: 'We are delighted to have you among us. On behalf of all the members and the management, we would like to extend our warmest welcome and good wishes!',
					uid: res.user.uid,
					photoUrl: '',
				});
		}
	};
	///-------------------------------------Reset-------------------------------------
	const reset = async (email) => {
		return await auth.sendPasswordResetEmail(email);
	};
	///-----------------------------------signOut-----------------------------------------
	const signOut = () => {
		return auth.signOut();
	};
	///----------------------------------------------verfication-------------------------
	const VerifyMail = async () => {
		return await auth.currentUser.sendEmailVerification();
		// Email verification sent!
	};
	///--------------------------Password update-------------------------
	const PasswordUpdate = async (newPassword) => {
		return await auth.currentUser.updatePassword(newPassword);
	};
	///-------------------------delete Account----------------------------
	const Delete = async() => {
		return await auth.currentUser.delete();
}

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
		VerifyMail,
		PasswordUpdate,
		Delete,
	};
	return (
		<AuthContext.Provider value={value}>
			{!Load && children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
