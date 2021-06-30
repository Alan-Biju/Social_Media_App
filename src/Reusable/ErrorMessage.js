import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineCloseSquare } from 'react-icons/ai';
const Message = ['Email sent', 'Updated', 'Password Changed'];

const ErrorMessage = ({ state }) => {
	const [message, setMessage] = state;
	useEffect(() => {
		setTimeout(() => {
			setMessage();
		}, [3000]);
		return () => {
			clearInterval();
		};
	}, [setMessage]);
	return (
		<>
			<ErrorContainer onClick={() => setMessage()} message={message}>
				<p>{message}</p>
				<Close size={25} style={{ color: '#ffffff' }} />
			</ErrorContainer>
		</>
	);
};

export default ErrorMessage;
const MoveIn = keyframes`
from{
    transform:translateX(100%);

}to{
    transform:translateX(0%);
}
`;
const ErrorContainer = styled.div`
	width: 235px;
	min-width: 235px;
	max-width: 330px;
	min-height: 50px;
	background-color: ${(prop) =>
		Message.includes(prop.message) ? '#28DF99' : '#ff5042'};
	display: flex;
	align-items: center;
	justify-content: space-around;
	border-radius: 5px;
	position: absolute;
	top: calc(5% + 50px);
	right: 0%;
	padding: 5px;
	cursor: pointer;
	animation: 0.8s ${MoveIn} cubic-bezier(0.51, 0.92, 0.24, 1.15);
	z-index: 10;

	p {
		color: #ffffff;
		letter-spacing: 1px;
		font-size: 0.65rem;
		font-family: 'Raleway', sans-serif;
		font-weight: bold;
		width: 290px;
		margin-left: 5px;
	}
`;
const Close = styled(AiOutlineCloseSquare)``;
