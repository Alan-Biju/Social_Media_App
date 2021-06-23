import { useState } from 'react';
import { useAuth } from '../Context/AuthProvider';
import db from '../Firebase';

const HelperFirestore = () => {
    const { Auth } = useAuth();
    const [postImg,setPostImg]=useState()
	//-------------------------------------------fetching post image for user------------------------------
	const postImages = async () => {
		try {
			await db
				.collection(`users/${Auth.uid}/posts`)
				.get()
				.then((res) => {
					const Arr = [];
					res.forEach((post) => {
						Arr.push({ ...post.data(), id: post.id });
					});
					Arr.sort((a, b) => {
						return b.Datetime - a.Datetime;
                    });
                    setPostImg(Arr);
				});
		} catch (e) {
			console.log(e);
		}
	};
	///------------------------------------------------------------

	return { postImages, postImg };
};

export default HelperFirestore;
