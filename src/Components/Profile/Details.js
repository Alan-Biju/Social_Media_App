import React from 'react';
import styled from 'styled-components';
import { useData } from '../../Context/DataProvider';
import { Link } from 'react-router-dom';

const Details = () => {
	const { profile } = useData();

	return (
		<>
			<DetailsContainer>
				<Button to='/Settings' style={{ textDecoration: 'none' }}>
					Edit
				</Button>

				<Info>
					<h3>{profile && profile.name}</h3>
					<p>{profile && profile.bio}</p>
					<a
						href={`https://${profile && profile.website}`}
						target='_blank'
						rel='noopener noreferrer'>
						{profile && profile.website}
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
`;
const Button = styled(Link)`
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
