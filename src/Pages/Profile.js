import React from 'react';
import styled from 'styled-components';
import ProfileLeftSide from '../Components/Profile/ProfileLefttSide';
import ProfileRightSide from '../Components/Profile/ProfileRightSide';
import { useData } from '../Context/DataProvider';

import { HomeContainer } from './Home';
const Profile = () => {
	const { postImg } = useData();
	return (
		<>
			<ProfileConatiner>
				<ProfileBox>
					<ProfileLeftSide Detail={postImg} />
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
	min-height: 100%;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 500px) {
		flex-direction: column;
		overflow-y: scroll;
	}
`;
