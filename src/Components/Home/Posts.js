import React from 'react';
import styled from 'styled-components';
import { FiHeart, FiBookmark, FiHash } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Badge from '../../Reusable/Badge';
const Posts = ({ Data }) => {
	let t = new Date(1970, 0, 1);
	t.setSeconds(Data.Datetime);
	const day = t.toLocaleString('en-US', { day: '2-digit' });
	const month = t.toLocaleString('en-US', { month: 'short' });
	const year = `${Number(Data.Datetime * 0.0000000317)}`;
	return (
		<>
			<PostContainer>
				<Heading>
					<Avatar>
						<img
							src={Data && Data.profileURL}
							alt='Profile Pic'
							onError={(e) => {
								e.target.src = '/image/profile.png';
							}}
						/>
						<p>
							{Data.name}
							{Data.isVerified && <Badge />} <span> . {Data.location}</span>
						</p>
					</Avatar>

					<DateTime>{`${day}-${month}-${year.split('.')[0]}`}</DateTime>
				</Heading>
				<ImageContainer>
					<LazyLoadImage
						src={Data.image}
						effect='blur'
						threshold={200}
						alt='postPic'
					/>
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
						{Data.caption}
					</h1>
					<p>more...</p>
				</TextSection>
			</PostContainer>
		</>
	);
};

export default Posts;
const PostContainer = styled.div`
	width: 100%;
	max-width: 430px;
	min-width: 300px;
	height: 540px;
	transition: background-color 0.5s ease-in-out;
	background-color: ${(prop) => prop.theme.postBG};
	margin: 0 auto;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
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
		object-fit: cover;
	}
	p {
		font-family: 'Manrope', sans-serif;
		font-size: 0.7rem;
		font-weight: 600;
		margin: 0 5px;
		letter-spacing: 1px;
		text-transform: capitalize;
		display: flex;
		align-items: center;
		transition: color 0.5s ease-in-out;
		color: ${(prop) => prop.theme.mainFont};
	}
	span {
		transition: color 0.5s ease-in-out;
		color: ${(prop) => prop.theme.greyFont};
	}
`;
const DateTime = styled.p`
	font-family: 'Raleway', sans-serif;
	font-size: 0.5rem;
	font-weight: 500;
	letter-spacing: 1px;
	transition: color 0.5s ease-in-out;
	color: ${(prop) => prop.theme.mainFont};
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
	transition: color 0.5s ease-in-out;
	color: ${(prop) => prop.theme.mainFont};
`;
const IconLeft = styled.div`
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: color 0.5s ease-in-out;
	color: ${(prop) => prop.theme.mainFont};
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
	transition: color 0.5s ease-in-out;
	color: ${(prop) => prop.theme.mainFont};

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
