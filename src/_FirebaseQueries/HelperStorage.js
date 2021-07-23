import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';
import { useData } from '../Context/DataProvider';
import db from '../Firebase';
import { storage } from '../Firebase';
const HelperStorage = () => {
	const history = useHistory();
	const { Auth } = useAuth();
	const { profile } = useData();
	const [progress, setProgress] = useState('');
	///-------------------------------------------------postUpload-------------
	const postUpload = async (caption, description, location, file) => {
		try {
			const Ref = storage.ref(`posts/${Auth.uid}/${file.name}`).put(file);
			Ref.on(
				'state_changed',
				(snapshot) => {
					// progress function .....
					const progress = Math.round(
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100,
					);
					setProgress(progress);
				},
				(error) => {
					// Error function...
					console.log(error);
				},
				async () => {
					await storage
						.ref(`posts/${Auth.uid}`)
						.child(`${file.name}`)
						.getDownloadURL()
						.then(async (url) => {
							///--------------------------------------------firebase storage-----------------
							await db
								.collection(`users/${Auth.uid}/posts`)
								.add({
									name: profile.name,
									caption: caption,
									description: description,
									location: location,
									image: url,
									Datetime: new Date(),
									profileURL: profile.photoUrl,
									isVerified: Auth.emailVerified,
									userId:Auth.uid
								})
								.then(() => {
									history.push('/');
								});
						});
				},
			);
		} catch (e) {
			console.log(e);
		}
	};
	////------------------------------------------------Profile set-------------------------------

	const profilePhoto = (file) => {
		const Ref = storage
			.ref(`ProfilePhoto/${Auth.uid}/${Auth.displayName}`)
			.put(file);
		Ref.on(
			'state_changed',
			(snapshot) => {
				// progress function .....
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100,
				);
				setProgress(progress);
			},
			(error) => {
				console.log(error);
			},
			async () => {
				await storage
					.ref(`ProfilePhoto/${Auth.uid}`)
					.child(`${Auth.displayName}`)
					.getDownloadURL()
					.then(async (url) => {
						await db
							.collection(`users/${Auth.uid}/Profile`)
							.doc('details')
							.update({
								photoUrl: url,
							})
							.then(() => {
								console.log('up');
								db.collection(`users/${Auth.uid}/posts`)
									.get()
									.then((res) => {
										res.forEach((data) => {
											db.collection(`users/${Auth.uid}/posts`)
												.doc(data.id)
												.update({
													profileURL: url,
													isVerified: Auth.emailVerified,
												});
										});
									});
							});
					});
			},
		);
	};

	///------------------------------------return values
	return { postUpload, progress, profilePhoto };
};

export default HelperStorage;
