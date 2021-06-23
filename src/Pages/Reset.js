import React, { useState } from 'react';
import Input from '../Reusable/Input';
import styled from 'styled-components';
import { BsQuestionDiamond } from 'react-icons/bs';
import {
	LoginContainer,
	Form,
	TitleContainer,
	Title,
	BodyContainer,
	Message,
	InputContainer,
	ButtonConatiner,
	LinkTagSignUp,
} from './Login';
import { useAuth } from '../Context/AuthProvider';
const Reset = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const { reset } = useAuth();
	const ResetHandler = async (e) => {
		e.preventDefault();
        try {
            setMessage('')
			await reset(email);
			setEmail('');
		} catch (e) {
			setMessage(e.message);
		}
	};
	return (
		<>
			<ResetContainer>
				<Form autoComplete='off' onSubmit={ResetHandler}>
					<TitleContainer>
						<ResetTitle>Forgot Your Password ?</ResetTitle>
					</TitleContainer>
					<BodyContainer>
						{message ? (
							<Message>{message}</Message>
						) : (
							<Message>
								<br />
							</Message>
						)}
						<InputContainer>
							<Info>
								We'll email you instructions on how to reset it{' '}
								<BsQuestionDiamond />
							</Info>
							<Input
								type='text'
								label='Enter Your Email'
								state={[email, setEmail]}
							/>
						</InputContainer>
						<ButtonConatiner>
							<button type='submit'>Send </button>
							<LinkTagSignUp to='/Login'>
								Don't have an account? <span>Sign In</span>
							</LinkTagSignUp>
						</ButtonConatiner>
					</BodyContainer>
				</Form>
			</ResetContainer>
		</>
	);
};

export default Reset;
const ResetContainer = styled(LoginContainer)``;
const ResetTitle = styled(Title)`
	font-size: 1.5rem;
	width: 100%;
`;
const Info = styled.p`
	text-align: center;
	font-family: 'Raleway', sans-serif;
	font-size: 0.8rem;
	font-weight: 600;
	letter-spacing: 1px;
	color: #5f5c5c;
`;
