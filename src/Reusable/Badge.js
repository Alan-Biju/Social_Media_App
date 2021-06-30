import React from 'react';
import { HiBadgeCheck } from 'react-icons/hi';
import styled from 'styled-components';

const Badge = () => {
	return (
		<>
			<Check />
		</>
	);
};

export default Badge;
const Check = styled(HiBadgeCheck)`
	color: #3aa9cb;
	font-size: 1.2rem;
`;
