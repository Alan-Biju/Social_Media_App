import { useState } from 'react';
import { useAuth } from '../Context/AuthProvider';
import db from '../Firebase';
import { storage } from '../Firebase';
const Helper = () => {
	const { Auth } = useAuth();
	const [progress, setProgress] = useState('');

	///-------------------------------------------------postUpload-------------
	const postUpload = async (caption, description, file) => {
		try {
			const Ref = storage.ref(`posts/${file.name}`).put(file);
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
						.ref(`posts`)
						.child(`${file.name}`)
						.getDownloadURL()
						.then(async (url) => {
							///--------------------------------------------firebase storage-----------------
							await db
								.collection(`users`)
								.doc(`${Auth.uid}`)
								.collection('posts')
								.add({
									caption: caption,
									description: description,
									image: url,
                                    Datetime: new Date(),
                                });
                            
						});
				},
			);
		} catch (e) {
			console.log(e);
		}
	};

	///------------------------------------return values
	return { postUpload, progress };
};

export default Helper;
