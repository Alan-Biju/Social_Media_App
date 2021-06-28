import { useAuth } from '../Context/AuthProvider';
import db from '../Firebase';

const HelperFirestoreFunctions = () => {
    const { Auth } = useAuth();
    
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
                uid:Auth.uid,
			});
	};

	return { ProfileUpdate };
};

export default HelperFirestoreFunctions;
