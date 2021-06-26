import React, { useState } from 'react';
import styled from 'styled-components';
import { useData } from '../../Context/DataProvider';
import { Pivot as Hamburger } from 'hamburger-react';
const SettingsLeftSide = () => {
	const [isOpen, setOpen] = useState(false);
	const { setChange } = useData();
	const Settings = (listName) => {
		setChange(listName);
		setOpen(false);
	};
	console.log(isOpen);
	return (
		<>
			<SettingListBox show={isOpen}>
				<Menu>
					<Hamburger color='#4FD1C5' toggled={isOpen} toggle={setOpen} />
				</Menu>
				<List onClick={() => Settings('Edit')}>Edit Profile</List>
				<List onClick={() => Settings('Verify')}>Verify Account</List>
				<List onClick={() => Settings('Password')}>Change Password</List>
				<List onClick={() => Settings('Delete')}>Delete Account</List>
			</SettingListBox>
		</>
	);
};

export default SettingsLeftSide;
const Menu = styled.div`
	position: absolute;
	top: 0px;
	right: -60px;
	display: none;
	@media (max-width: 720px) {
		display: block;
	}
`;

const SettingListBox = styled.div`
	width: 100%;
	max-width: 300px;
	min-width: 230px;
	height: 100%;
	background: #ffffff;
	font-weight: 600;
	font-family: 'Manrope', sans-serif;
	z-index: 6;
	position: relative;
	@media (max-width: 720px) {
		width: 260px;
		transition: all 0.7s ease;
		position: fixed;
		top: 60px;
		transform: ${(prop) =>
			prop.show ? 'translateX(0%)' : 'translateX(-104%)'};
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
`;
const List = styled.div`
	width: 100%;
	height: 60px;
	padding: 0 20px;
	font-size: 0.9rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	letter-spacing: 1px;
	cursor: pointer;
	&:hover {
		background-color: #f3f3f3;
	}
`;
