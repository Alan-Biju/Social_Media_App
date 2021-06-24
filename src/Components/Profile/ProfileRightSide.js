import React from 'react';
import styled from 'styled-components';
import PostImage from './PostImage';

const ProfileRightSide = ({ postImg }) => {
	return (
		<>
			<PostsContainer>
				<PostGridContainer>
					{postImg &&
						postImg.map((post) => {
							return <PostImage key={post.id} Data={post} />;
						})}
				</PostGridContainer>
			</PostsContainer>
		</>
	);
};

export default ProfileRightSide;
const PostsContainer = styled.div`
	width:100% ;
	height: 100%;
	background-color: #ffffff;
	overflow-y: scroll;
	@media (max-width: 500px) {
		overflow-y: visible;
	}
`;
const PostGridContainer = styled.div`
	padding: 10px 20px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	grid-gap: 15px;
	grid-auto-flow: dense;
	margin: 0 auto;
	@media (max-width: 500px) {
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		grid-gap: 5px;
	}
`;
