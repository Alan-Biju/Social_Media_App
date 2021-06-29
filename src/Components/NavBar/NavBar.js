import React, { useState } from 'react';
import NavBarIcon from './NavBarIcon';
import styled, { keyframes } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { RiHome2Line, RiAddLine } from 'react-icons/ri';
import { BsPerson, BsCircle } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import ToggleButton from './ToggleButton';
import { useData } from '../../Context/DataProvider';
import DropDown from './DropDown';
const NavBar = () => {
	const [drop, setDrop] = useState(false);
	const { profile } = useData();
	return (
		<>
			<SideIcons>
				<LogoIcon to='/'>
					<NavBarIcon />
				</LogoIcon>
				<Avatar onClick={() => setDrop(!drop)}>
					<PhotoFrame />
					<img src={ profile && profile.photoUrl } alt='Profile Pic' onError={ (e) => {
						e.target.src='/image/profile.png'
					}}/>
				</Avatar>
			</SideIcons>
			{drop && <DropDown Drop={setDrop} />}
			<Header>
				<IconGroup>
					<SideIcon>
						<ToggleButton />
					</SideIcon>
					<Icon exact to='/' activeClassName='active'>
						<RiHome2Line />
					</Icon>
					<Icon exact to='/AddPost' activeClassName='active'>
						<RiAddLine />
					</Icon>
					<Icon exact to='/Profile' activeClassName='active'>
						<BsPerson />
					</Icon>
					<Icon exact to='/Settings' activeClassName='active'>
						<IoSettingsOutline />
					</Icon>
				</IconGroup>
			</Header>
		</>
	);
};

export default NavBar;
const LogoIcon = styled(Link)`
	margin: 2px 10px;
	user-select: none;
`;
const Avatar = styled.div`
	user-select: none;
	margin: 2px 10px;
	position: relative;
	display: grid;
	place-items: center;
	img {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		object-fit: cover;
	}
`;
const PhotoFrame = styled(BsCircle)`
	position: absolute;
	color: #368ad9;
	font-size: 2.8rem;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition-duration: 0.5s;
	opacity: 0;
	&:hover {
		opacity: 1;
	}
`;
const SideIcons = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	top: 0;
	background-color: white;
	@media (max-width: 450px) {
		position: static;
		position: sticky;
		top: 0;
	}
`;
const Header = styled.header`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #ffffff;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	z-index: 9;
	user-select: none;
	@media (max-width: 450px) {
		position: fixed;
		bottom: 0;
		left: 0;
	}
`;
const IconGroup = styled.div`
	width: 100%;
	height: 100%;
	max-width: 350px;
	min-width: 240px;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;
const Pulse = keyframes`
 0% {
    box-shadow: 0 0 0 0 #0a0a0a28;
  }
  70% {
      box-shadow: 0 0 0 3px #05050529;
  }
  100% {
      box-shadow: 0 0 0 0 #1d1c1c1d;
  }
`;
const Icon = styled(NavLink)`
	text-decoration: none;
	font-size: 1.2rem;
	color: #a19d9d;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 35px;
	height: 35px;
	transition: color 0.5s ease;
	position: relative;
	user-select: none;
	&:hover {
		color: #1a1919;
	}
	&.active {
		color: #1a1919;
		&::after {
			content: ' ';
			background-color: #1a1919;
			position: absolute;
			width: 5px;
			height: 5px;
			border-radius: 50%;
			bottom: -2px;
			left: 50%;
			transform: translate(-50%, -50%);
			animation: ${Pulse} 2s infinite;
		}
	}
`;
const SideIcon = styled.div`
	font-size: 1.2rem;
	color: #a19d9d;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 35px;
	height: 35px;
	transition: color 0.5s ease;
	cursor: pointer;
	z-index: 99;
	&:hover {
		color: #1a1919;
	}
`;
