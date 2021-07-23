import { useState } from 'react';
import { useAuth } from '../Context/AuthProvider';
import { useData } from '../Context/DataProvider';
import db from '../Firebase';

const HelperFirestoreFunctions = () => {
	const { Auth } = useAuth();
	const { profile } = useData();
	const [postDetails, setPostDetails] = useState('');

	//----------------------------------profile Update-----------------------
	const ProfileUpdate = async (name, website, bio) => {
		return await db
			.collection(`users`)
			.doc(Auth.uid)
			.collection('Profile')
			.doc('details')
			.update({
				name: name,
				website: website,
				bio: bio,
				uid: Auth.uid,
				photoUrl: profile.photoUrl,
				isVerified: Auth.emailVerified,
			})
			.then(async () => {
				await db
					.collection(`users/${Auth.uid}/posts`)
					.get()
					.then((res) => {
						res.forEach((data) => {
							db.collection(`users/${Auth.uid}/posts`).doc(data.id).update({
								name: name,
								isVerified: Auth.emailVerified,
							});
						});
					});
			});
	};
	///--------------------------------------------------------Get Post full Details---------
	const Details = async (uid, id) => {
		await db
			.collection(`users/${uid}/posts`)
			.doc(id)
			.get()
			.then(async (res) => {
				setPostDetails({ ...res.data(), id: res.id });
			})
			.catch((e) => {
				console.log(e);
			});
	};
	//--------------------------------------------comment update---------------
	const addComment = async (uid, postId, comment) => {
		await db
			.collection('users')
			.doc(uid)
			.collection('posts')
			.doc(postId)
			.collection('Comment')
			.add({
				message: comment,
				user: uid,
				profileURL: profile.photoUrl,
			})
			.then((res) => {
				console.log('posted');
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return {
		ProfileUpdate,
		Details,
		postDetails,
		addComment,
	};
};

export default HelperFirestoreFunctions;
