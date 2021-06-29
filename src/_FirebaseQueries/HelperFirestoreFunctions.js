import { useAuth } from '../Context/AuthProvider';
import { useData } from '../Context/DataProvider';
import db from '../Firebase';

const HelperFirestoreFunctions = () => {
    const { Auth } = useAuth();
	const { profile } = useData();
	const ProfileUpdate = (name, website, bio) => {
		return db
			.collection(`users`)
			.doc(Auth.uid)
			.collection('Profile')
			.doc('details')
			.set({
				name: name,
				website: website,
                bio: bio,
				uid: Auth.uid,
				photoUrl:profile.photoUrl,
			});
	};

	return { ProfileUpdate };
};

export default HelperFirestoreFunctions;
