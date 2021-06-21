import React, { lazy, useEffect } from 'react';
import styled from 'styled-components';
import Helper from '../../FirebaseQueries/Helper';
const Posts = lazy(() => import('../Posts/Posts'));
const Home = () => {
	const { AllPost, posts} = Helper();
	useEffect(() => {
		AllPost();

		return AllPost();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
				<HomeContainer>
					<HomePostContainer>
						{posts && posts.length > 0 ? (
							posts.map((post) => {
								return <Posts key={post.id} Data={post}  />;
							})
						) : (
							<BackHome>
								<img src='/Image/BackHome.svg' alt='mT' />
							</BackHome>
						)}
					</HomePostContainer>
				</HomeContainer>
			
		</>
	);
};

export default Home;
const HomeContainer = styled.div`
	width: 100%;
	height: calc(100% - 50px);
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 10px;
	overflow-y: scroll;
	@media (max-width: 450px) {
		height: calc(100% - 100px);
	}
`;
const HomePostContainer = styled.div`
	width: 100%;
	max-width: 900px;
	min-width: 300px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
const BackHome = styled.div`
	img {
		width: 60%;
		height: 90%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;
