import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styled from 'styled-components';
const ImgeBox = ({Url}) => {
    return (
			<Image>
				<LazyLoadImage src={Url} alt='PostPic' effect='blur' />
			</Image>
		);
}

export default ImgeBox
const Image = styled.div`
	max-width: 350px;
	min-width: 300px;
	display: grid;
	place-items: center;
	@media (max-width: 750px) {
		max-width: 100%;
	}
	img {
		width: 100%;
		height: 450px;
		object-fit: cover;
	}
`;