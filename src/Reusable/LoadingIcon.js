import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const LoadingIcon = () => {
	return (
		<>
			<Icon type='bubbles' color={'#838282'} height={30} width={80} />
		</>
	);
};

export default LoadingIcon;
const Icon = styled(ReactLoading)`
	position: absolute;
	top: 50%;
	left: 50%;
	transition: color 0.5s ease-in-out;
	transform: translate(-50%, -50%);
`;