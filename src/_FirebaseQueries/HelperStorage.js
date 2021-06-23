import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';
import { useData } from '../Context/DataProvider';
import db, { auth } from '../Firebase';
import { storage } from '../Firebase';
const HelperStorage = () => {
	const history = useHistory();
	const { setPhoto } = useData();
	const { Auth } = useAuth();
	const [progress, setProgress] = useState('');
	const [posts, setPosts] = useState('');

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
		const Ref = storage.ref(`ProfilePhoto/${Auth.uid}/${file.name}`).put(file);
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
					.child(`${file.name}`)
					.getDownloadURL()
					.then(async (url) => {
						const user = auth.currentUser;
						await user
							.updateProfile({
								photoURL: url,
							})
							.then(() => {
								console.log('updated');
								setPhoto(url);
							})
							.catch((e) => {
								console.log(e);
							});
					});
			},
		);
	};

	///-----------------------------------------------------------All Post Fetch------------
	useEffect(() => {
		const unSubscribe = db.collectionGroup('posts').onSnapshot((res) => {
			const Arr = [];
			res.forEach((post) => {
				Arr.push({ ...post.data(), id: post.id });
			});
			Arr.sort((a, b) => {
				return b.Datetime - a.Datetime;
			});

			setPosts(Arr);
		});

		return () => {
			unSubscribe();
		};
	}, []);

	///------------------------------------return values
	return { postUpload, progress, posts, profilePhoto };
};

export default HelperStorage;
