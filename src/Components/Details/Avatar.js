import React from 'react';
import styled from 'styled-components';
import Badge from '../../Reusable/Badge';

const Avatar = ({ Data }) => {
	let t = new Date(1970, 0, 1);
	t.setSeconds(Data.Datetime);
	const day = t.toLocaleString('en-US', { day: '2-digit' });
	const month = t.toLocaleString('en-US', { month: 'short' });
	const year = `${Number(Data.Datetime * 0.0000000317)}`;
	return (
		<>
			<AvatarBox>
				<div>
					<img
						src={Data.profileURL}
						onError={(e) => {
							e.target.src = '/image/profile.png';
						}}
						alt='Profile Pic'
					/>
					<p>
						{Data.name}
						{Data.isVerified && <Badge />} <span> . {Data.location}</span>
					</p>
				</div>
				<DateTime>{`${day}-${month}-${year.split('.')[0]}`}</DateTime>
			</AvatarBox>
		</>
	);
};

export default Avatar;
const AvatarBox = styled.div`
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	div {
		display: flex;
		align-items: center;
		img {
			width: 50px;
			height: 50px;
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
	}
	span {
		transition: color 0.5s ease-in-out;
		color: ${(prop) => prop.theme.greyFont};
	}
`;
const DateTime = styled.p`
	font-family: 'Raleway', sans-serif;
	font-size: 0.6rem;
	font-weight: 600;
	letter-spacing: 1px;
	transition: color 0.5s ease-in-out;
	color: ${(prop) => prop.theme.mainFont};
`;
