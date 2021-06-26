import React from 'react';
import { BsCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useData } from '../../Context/DataProvider';

const Avatar = () => {
	const { photo } = useData();
	return (
		<>
			<AvatarBox to='/Profile'>
				<PhotoFrame />
				<img src={photo} alt='Profile Pic' />
			</AvatarBox>
		</>
	);
};

export default Avatar;

const AvatarBox = styled(Link)`
	user-select: none;
	position: relative;
	display: grid;
	place-items: center;
	img {
		width: 55px;
		height: 55px;
		border-radius: 50%;
		object-fit: cover;
	}
`;
const PhotoFrame = styled(BsCircle)`
	position: absolute;
	color: #368ad9;
	font-size: 4.2rem;
	font-weight: 100;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition-duration: 0.5s;
	opacity: 1;
`;
