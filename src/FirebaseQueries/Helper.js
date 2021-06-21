import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';
import db from '../Firebase';
import { storage } from '../Firebase';
const Helper = () => {
	const history = useHistory();
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
					alert(error.message);
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
	///-----------------------------------------------------------All Post Fetch------------
	const AllPost = () => {
		try {
			db.collectionGroup('posts')
				.get()
				.then((res) => {
					const Arr = [];
					res.forEach((post) => {
						Arr.push({ ...post.data(), id: post.id });
					});
					Arr.sort((a, b) => {
						return b.Datetime - a.Datetime;
					});

					setPosts(Arr);
				});
		} catch (e) {
			console.log(e);
		}
	};

	///------------------------------------return values
	return { postUpload, progress, AllPost, posts };
};

export default Helper;
