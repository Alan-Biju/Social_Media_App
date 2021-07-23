import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import { FiHeart, FiBookmark } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';
import { useData } from '../../Context/DataProvider';
import Comment from './Comment';
import HelperFirestoreFunctions from '../../_FirebaseQueries/HelperFirestoreFunctions';
import db from '../../Firebase';

const DetailsZone = ({ Data }) => {
	const [comments, setComments] = useState();
	const { addComment } = HelperFirestoreFunctions();
	///-------------its was nesscery so that comment is dynamic in use ----------
	useEffect(() => {
		const unSubscribe = db
			.collection(`users/${Data.userId}/posts/${Data.id}/Comment`)
			.onSnapshot((ress) => {
				let Arr = [];
				ress.forEach((data) => {
					return Arr.push(data.data());
                });
				setComments(Arr);
			});
		return () => {
			unSubscribe();
		};
	}, [Data]);
	//---------------------------------------------------
	const { profile } = useData();
	const comment = useRef();
	const AddComment = async () => {
		const message = comment.current.value;
		await addComment(Data.userId, Data.id, message);
		comment.current.value = '';
	};
	return (
		<DetailsBox>
			{Data && <Avatar Data={Data} />}
			<Icons>
				<IconLeft>
					<Heart />
					<FaRegComment />
				</IconLeft>
				<IconRight>
					<FiBookmark />
				</IconRight>
			</Icons>
			<Description>
				<h6>{Data && Data.description}</h6>
			</Description>
			<CommentSection>
				{
					<Input>
						<img
							src={profile && profile.photoUrl}
							alt='Profile Pic'
							onError={(e) => {
								e.target.src = '/image/profile.png';
							}}
						/>
						<div>
							<input type='text' ref={comment} />
							<button onClick={AddComment}>Post</button>
						</div>
					</Input>
				}
				<Comments>
					{comments &&
						comments.map((data, idx) => {
							return <Comment key={idx} Data={data} />;
						})}
				</Comments>
			</CommentSection>
		</DetailsBox>
	);
};

export default DetailsZone;
const DetailsBox = styled.div`
	width: 100%;
	padding: 5px;
	height: 100%;
`;
const Icons = styled.div`
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
const Description = styled.div`
	width: 100%;
	padding: 5px;
	h6 {
		font-family: 'Manrope', sans-serif;
		font-size: 0.7rem;
		font-weight: 700;
		margin: 0 5px;
		letter-spacing: 1px;
		text-transform: capitalize;
		transition: color 0.5s ease-in-out;
		color: ${(prop) => prop.theme.mainFont};
	}
`;
const CommentSection = styled.div`
	height: 100%;
`;
const Comments = styled.div`
	margin-top: 10px;
	padding: 5px;
	height: 295px;
	overflow-y: scroll;
	@media (max-width: 750px) {
		height: 100%;
	}
`;
const Input = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	img {
		width: 30px;
		height: 30px;
		object-fit: cover;
		border-radius: 50%;
	}
	div {
		display: flex;
		align-items: center;
		background-color: #f6f6f6;
		border-radius: 30px;
		border: 0.5px solid #c2c2c2;
		button {
			border: none;
			color: #3aa9cb;
			font-family: 'Manrope', sans-serif;
			font-weight: 700;
			letter-spacing: 1px;
			cursor: pointer;
			text-transform: capitalize;
			background-color: transparent;
			padding-right: 10px;
		}
		input[type='text'] {
			width: 100%;
			padding: 6px 12px;
			font-size: 17px;
			border: none;
			outline: none;
			text-transform: capitalize;
			background-color: inherit;
			border-top-left-radius: 30px;
			border-bottom-left-radius: 30px;
		}
	}
`;
