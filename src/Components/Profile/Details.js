import React from 'react';
import styled from 'styled-components';


const Details = () => {
 
	return (
		<>
			<DetailsContainer>
				<button>Edit</button>
				<Info>
					<h3>Alan Biju</h3>
					<p>
						Builds the app for production to the build folder. It correctly
						bundles React in production mode and optimizes the build for the
						best performance.
					</p>
					<a href='##' target='_blank' rel='noopener'>
						www.alanBiju.com
					</a>
				</Info>
			</DetailsContainer>
		</>
	);
};

export default Details;
const DetailsContainer = styled.div`
	padding: 20px 0;
	margin: 0 auto;
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: space-around;
    flex-direction: column;
	button {
		border: none;
		outline: none;
		width: 100%;
		text-align: center;
		padding: 6px 10px;
		font-size: 0.8rem;
		letter-spacing: 1px;
		background: #419bf0;
		cursor: pointer;
		transition-duration: 0.5s;
		border-radius: 3px;
		font-family: 'Manrope', sans-serif;
		color: #f6f6f6;
		font-weight: 600;
		&:hover {
			background: #368ad8;
		}
	}
`;
const Info = styled.div`
	width: 100%;
	font-family: 'Manrope', sans-serif;

	h3 {
		font-size: 1rem;
		padding: 20px 0;
	}
	P {
		font-size: 0.8rem;
		font-weight: 500;
		color: #6d6b6b;
	}
	a {
		text-decoration: none;
		color: #419bf0;
		font-size: 0.8rem;
		font-weight: 600;
	}
`;
