import React from 'react';
import styled from 'styled-components';
import Posts from '../Components/Home/Posts';
import { useData } from '../Context/DataProvider';
const Home = () => {
	const { posts } = useData();

	return (
		<>
			<HomeContainer>
				<HomePostContainer>
					{posts && posts.length > 0 ? (
						posts.map((post) => {
							return <Posts key={post.id} Data={post} />;
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
export const HomeContainer = styled.main`
	width: 100%;
	height: calc(100% - 50px);
	display: flex;
	align-items: center;
	flex-direction: column;
	overflow-y: scroll;
	padding: 10px;
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
