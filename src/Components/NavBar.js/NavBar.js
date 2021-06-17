import React from 'react';
import NavBarIcon from './NavBarIcon';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { RiHome2Line, RiAddLine } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';
import { IoIosLogOut } from 'react-icons/io';
import { useAuth } from '../../Context/AuthProvider';
import ToggleButton from './ToggleButton';
const NavBar = () => {
	const { signOut } = useAuth();
	return (
		<>
			<LogoIcon>
				<NavBarIcon />
			</LogoIcon>
			<Header>
				<IconGroup>
					<SideIcon >
						<ToggleButton/>
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
					<SideIcon  onClick={async () => await signOut()}>
						<IoIosLogOut />
					</SideIcon>
				</IconGroup>
			</Header>
			<Avatar>
				<img
					src='https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png'
					alt='Profile Pic'
				/>
			</Avatar>
		</>
	);
};

export default NavBar;
const LogoIcon = styled.div`
	position: fixed;
	top: 10px;
	left: 10px;
`;
const Avatar = styled.div`
	position: fixed;
	top: 10px;
	right: 10px;
	img {
		width: 35px;
		height: 35px;
		border-radius: 50%;
	}
`;
const Header = styled.header`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #ffffff;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
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
	&:hover {
		color: #1a1919;
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
			bottom: 0;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
`;
