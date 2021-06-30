import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoCamera } from 'react-icons/io5';
import HelperStorage from '../../_FirebaseQueries/HelperStorage';
import { useData } from '../../Context/DataProvider';
import { RiLoader5Fill } from 'react-icons/ri';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
const Avatar = () => {
	const { profile } = useData();
	const { profilePhoto, progress } = HelperStorage();
	const [image, setImage] = useState();

	useEffect(() => {
		image && profilePhoto(image);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [image]);

	const handleChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};
	return (
		<>
			<Avatars>
				<label htmlFor='Photo'>
					<div>
						<Img
							src={profile.photoUrl}
							alt='Profile Pic'
							effect='black-and-white'
							onError={(e) => {
								e.target.src = '/image/profile.png';
							}}
						/>
						<Add>
							{progress ? (
								progress === 100 ? (
									<IoCamera size={14} />
								) : (
									<Loading size={14} />
								)
							) : (
								<IoCamera size={14} />
							)}
						</Add>
					</div>
				</label>
				<input
					type='file'
					name='Photo'
					id='Photo'
					onChange={handleChange}
					disabled={progress ? (progress === 100 ? false : true) : false}
				/>
			</Avatars>
		</>
	);
};

export default Avatar;
const Spin = keyframes`
from{
    transform:rotate(0deg);
}to{
    transform:rotate(360deg);
}

`;
const Loading = styled(RiLoader5Fill)`
	animation: 0.8s ${Spin} forwards infinite;
`;
const Avatars = styled.div`
	width: 100%;
	height: 120px;
	display: grid;
	place-items: center;
	label {
		cursor: pointer;
	}
	input {
		display: none;
	}

	div {
		width: 88px;
		height: 88px;
		background: linear-gradient(to right, #2193b0, #6dd5ed);
		border-radius: 50%;
		display: grid;
		place-items: center;
		position: relative;
		&::before {
			content: '';
			width: 84px;
			height: 84px;
			border-radius: 50%;
			position: absolute;
			background-color: #ffffff;
		}
	}
`;
const Img = styled(LazyLoadImage)`
	width: 76px;
	height: 76px;
	border-radius: 50%;
	z-index: 5;
	object-fit: cover;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
const Add = styled.span`
	width: 20px;
	height: 20px;
	color: #3aa9cb;
	background: #ffffff;
	position: absolute;
	border-radius: 50%;
	bottom: 0px;
	right: 0px;
	z-index: 5;
	display: grid;
	place-items: center;
	font-size: 1.3rem;
`;
