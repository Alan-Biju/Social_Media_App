import React from 'react';
import { CgSun, CgMoon } from 'react-icons/cg';
import styled, { keyframes } from 'styled-components';
import { useData } from '../../Context/DataProvider';
const ToggleButton = () => {
	const { isDarkMode, setIsDarkMode } = useData();

	return (
		<>
			<Button onClick={() => setIsDarkMode(!isDarkMode)}>
				{isDarkMode ? <Sun /> : <Moon />}
			</Button>
		</>
	);
};

export default ToggleButton;
const Button = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	&:hover {
		transform: rotate(45deg);
	}
`;
const SunAnimation = keyframes`
from{
    transform:rotate(0deg);
    opacity:0;
}
to{
    transform:rotate(360deg);
    opacity:1;
}
`;
const Sun = styled(CgSun)`
	animation: 1s ${SunAnimation} cubic-bezier(0.51, 0.92, 0.24, 1.15);
`;
const MoonAnimation = keyframes`
from{
    transform:scale(0.5);
    opacity:0;
}
to{
    transform:scale(1);
    opacity:1;
}
`;
const Moon = styled(CgMoon)`
	animation: 1s ${MoonAnimation} cubic-bezier(0.51, 0.92, 0.24, 1.15);
`;
