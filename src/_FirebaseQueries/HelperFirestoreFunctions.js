import { useAuth } from '../Context/AuthProvider';
import { useData } from '../Context/DataProvider';
import db from '../Firebase';

const HelperFirestoreFunctions = () => {
	const { Auth } = useAuth();
	const { profile } = useData();

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
				isVerified:Auth.emailVerified,
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
	///--------------------------------------------------------
	return { ProfileUpdate };
};

export default HelperFirestoreFunctions;
