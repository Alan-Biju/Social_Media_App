import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BsBookmarkCheck } from 'react-icons/bs';
import { IoIosLogOut } from 'react-icons/io';
import { useAuth } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';

const DropDown = ({ Drop }) => {
	const { signOut } = useAuth();
	return (
		<>
			<DropBox>
				<List to='' onClick={() => Drop(false)}>
					<BsBookmarkCheck />
					<p>Saved</p>
				</List>
				<List
					to='/Login'
					onClick={async () => {
						await signOut();
					}}>
					<IoIosLogOut />
					<p>LogOut</p>
				</List>
			</DropBox>
		</>
	);
};

export default DropDown;
const PopIn = keyframes`
from{
    transform:translateX(100%);
    opacity:0;
}
to{
    transform:translateX(0);
    opacity:1;
}
`;
const DropBox = styled.div`
	padding: 5px;
	width: 180px;
	background-color: #ffffff;
	position: absolute;
	right: 15px;
	top: 55px;
	animation: ${PopIn} 0.6s cubic-bezier(0.25, 0.75, 0.5, 1.25);
	z-index: 7;
	border-radius: 5px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	&::after {
		content: '';
		width: 20px;
		height: 20px;
		transform: rotate(45deg);
		position: absolute;
		top: -10px;
		right: 5px;
		background-color: inherit;
	}
`;
const List = styled(Link)`
	font-family: 'Manrope', sans-serif;
	text-decoration: none;
	color: #000000;
	width: 100%;
	height: 40px;
	padding: 0 20px;
	font-size: 0.8rem;
	display: flex;
	align-items: center;
	p {
		letter-spacing: 1px;
		font-weight: 500;
		padding: 0 10px;
	}
	&:hover {
		background-color: #f3f3f3;
	}
`;
