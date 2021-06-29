import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';
import db from '../Firebase';
import { storage } from '../Firebase';
const HelperStorage = () => {
	const history = useHistory();
	const { Auth } = useAuth();
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
								.collection(`users`)
								.doc(`${Auth.uid}`)
								.collection('posts')
								.add({
									name: Auth.displayName,
									caption: caption,
									description: description,
									location: location,
									image: url,
									Datetime: new Date(),
									profileURL: Auth.photoURL,
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
		console.log('from file');
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
							});
					});
			},
		);
	};

	///------------------------------------return values
	return { postUpload, progress, profilePhoto };
};

export default HelperStorage;
