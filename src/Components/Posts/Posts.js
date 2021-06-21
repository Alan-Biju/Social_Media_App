import React from 'react';
import styled from 'styled-components';
import StyledContentLoader from 'styled-content-loader';
import { FiHeart, FiBookmark, FiHash } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';

const Posts = ({ Data, Loading }) => {
	return (
		<>
			<StyledContentLoader isLoading={Loading}>
				<PostContainer>
					<Heading>
						<Avatar>
							<img
								src='https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png'
								alt='Profile Pic'
							/>
							<p>
								{Data && Data.name} <span> . bhadravthi</span>{' '}
							</p>
						</Avatar>

						<DateTime>20 may 2021</DateTime>
					</Heading>
					<ImageContainer>
						<img src={Data.image} alt='post' />
					</ImageContainer>
					<IconSection>
						<IconLeft>
							<Heart />
							<FaRegComment />
						</IconLeft>
						<IconRight>
							<FiBookmark />
						</IconRight>
					</IconSection>
					<TextSection>
						<h1>
							<span>
								<FiHash />
							</span>
							{Data && Data.caption}
						</h1>
						<p>more...</p>
					</TextSection>
				</PostContainer>
			</StyledContentLoader>
		</>
	);
};

export default Posts;
const PostContainer = styled.div`
	width: 100%;
	max-width: 430px;
	min-width: 300px;
	height: 540px;
	background-color: #ffffff;
	margin: 0 auto;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const Heading = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
`;
const Avatar = styled.div`
	user-select: none;
	display: flex;
	align-items: center;
	img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}
	p {
		font-family: 'Manrope', sans-serif;
		font-size: 0.7rem;
		font-weight: 600;
		margin: 0 5px;
		letter-spacing: 1px;
		text-transform: capitalize;
	}
	span {
		color: #646363;
	}
`;
const DateTime = styled.p`
	font-family: 'Raleway', sans-serif;
	font-size: 0.6rem;
	font-weight: 500;
`;
const ImageContainer = styled.div`
	width: 100%;
	height: 420px;
	img {
		width: 100%;
		height: 420px;
		object-fit: cover;
	}
`;
const IconSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
`;
const IconLeft = styled.div`
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Heart = styled(FiHeart)``;
const IconRight = styled.div``;
const TextSection = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px;
	font-family: 'Manrope', sans-serif;

	h1 {
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 1px;
		text-transform: capitalize;
	}
	p {
		font-size: 0.6rem;
		cursor: pointer;
	}
`;
