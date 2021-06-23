import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProfileLeftSide from '../Components/Profile/ProfileLefttSide';
import ProfileRightSide from '../Components/Profile/ProfileRightSide';
import HelperFirestore from '../_FirebaseQueries/HelperFirestore';
import { HomeContainer } from './Home';
const Profile = () => {
	const { postImages, postImg } = HelperFirestore();
	useEffect(() => {
		postImages();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<ProfileConatiner>
				<ProfileBox>
					<ProfileLeftSide />
					<ProfileRightSide postImg={postImg} />
				</ProfileBox>
			</ProfileConatiner>
		</>
	);
};

export default Profile;
const ProfileConatiner = styled(HomeContainer)``;
const ProfileBox = styled.div`
	width: 100%;
	height: 100%;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	background: aqua;
	display: flex;
	align-items: center;
	@media(max-width:500px){
		flex-direction: column;
	}
`;
