import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const PostImage = ({ Data }) => {
	return (
		<Link to={`/Details/${Data.userId}/${Data.id}`}>
			<Img src={Data.image} effect='blur' alt='post' />
		</Link>
	);
};

export default PostImage;
const Img = styled(LazyLoadImage)`
	width: 240px;
	height: 240px;
	object-fit: cover;
	@media (max-width: 500px) {
		width: 90px;
		height: 90px;
	}
`;
