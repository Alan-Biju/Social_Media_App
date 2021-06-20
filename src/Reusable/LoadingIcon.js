import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const LoadingIcon = () => {
	return (
		<>
			<Icon type='bubbles' color='#3a3a3a' height={30} width={80} />
		</>
	);
};

export default LoadingIcon;
const Icon = styled(ReactLoading)`
position: absolute;
top: 45%;
left:50%;
transform: translate(-50%,-50%);
`;