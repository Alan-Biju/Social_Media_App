import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import Details from './Details';

const ProfileLeftSide = () => {
	return (
		<>
			<ProfileDetails>
				<Avatar />
				<PostsDetails>
					<Item>
						<h3>25</h3>
						<p>Posts</p>
					</Item>
					<Item>
						<h3>25</h3>
						<p>Posts</p>
					</Item>
					<Item>
						<h3>25</h3>
						<p>Posts</p>
					</Item>
				</PostsDetails>
				<Details/>
			</ProfileDetails>
		</>
	);
};

export default ProfileLeftSide;
const ProfileDetails = styled.div`
	width: 100%;
	max-width: 320px;
	min-width: 240px;
	height: 100%;
	background: #ffffff;
	@media (max-width: 500px) {
		min-width:100%;
	}
`;

const PostsDetails = styled.div`
	margin: 0 auto;
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: space-between;

`;
const Item = styled.div`
	font-family: 'Manrope', sans-serif;
	display: grid;
	place-items: center;
	h3 {
		font-size: 1rem;
	}
	p {
		font-size: 0.6rem;
		font-weight: 500;
		color: #504e4e;
		letter-spacing: 1px;
	}
`;

