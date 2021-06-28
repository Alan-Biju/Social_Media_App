import { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthProvider';
import db from '../Firebase';

const HelperFirestore = () => {
	const { Auth } = useAuth();
	const [postImg, setPostImg] = useState();
	const [posts, setPosts] = useState('');
	const [profile, setProfile] = useState('');

	///-----------------------------------------------------Profile Details----------------------------

	useEffect(() => {
		const unSubscribe =
			Auth &&
			db.collection(`users/${Auth.uid}/Profile`).onSnapshot((res) => {
				res.forEach((post) => {
					setProfile(post.data());
				});
			});
		return () => {
			Auth && unSubscribe();
		};
	}, [Auth]);

	//-------------------------------------------fetching post image for user------------------------------

	useEffect(() => {
		const unSubscribe =
			Auth &&
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
		return () => {
			Auth && unSubscribe();
		};
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

	return { postImg, posts, profile };
};

export default HelperFirestore;
