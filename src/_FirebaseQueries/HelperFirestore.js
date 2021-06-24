import { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthProvider';
import db from '../Firebase';

const HelperFirestore = () => {
	const { Auth } = useAuth();
	const [postImg, setPostImg] = useState();
	const [posts, setPosts] = useState('');

	//-------------------------------------------fetching post image for user------------------------------

	useEffect(() => {
		if (Auth) {
			db.collection(`users/${Auth.uid}/posts`).onSnapshot((res) => {
				const Arr = [];
				res.forEach((post) => {
					Arr.push({ ...post.data(), id: post.id });
				});
				Arr.sort((a, b) => {
					return b.Datetime - a.Datetime;
				});
				setPostImg(Arr);
			});
		}
	}, [Auth]);

	///-----------------------------------------All Post Fetch--------------------------

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
	///------------------------------------------------------------

	return { postImg, posts };
};

export default HelperFirestore;
