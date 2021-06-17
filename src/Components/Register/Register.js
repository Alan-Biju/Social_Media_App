import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../Context/AuthProvider';
import Input from '../../Reusable/Input';
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
} from '../Login/Login';
const Register = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const { register } = useAuth();
	const registerHandler = async (e) => {
		e.preventDefault();
		try {
			setMessage('');
			await register(email, password, name);
			setEmail('');
			setName('');
			setPassword('');
			history.push('/');
		} catch (e) {
			setMessage(e.message);
		}
	};
	return (
		<>
			<RegisterContainer>
				<Form autoComplete='off' onSubmit={registerHandler}>
					<TitleContainer>
						<Title>Register</Title>
					</TitleContainer>
					<BodyContainer>
						{message ? (
							<Message>{message}</Message>
						) : (
							<Message>
								<br />
							</Message>
						)}
						<InputBox>
							<Input type='text' label='Your Name' state={[name, setName]} />
							<Input type='text' label='Your Email' state={[email, setEmail]} />
							<Input
								type='password'
								label='Your Password'
								state={[password, setPassword]}
							/>
						</InputBox>
						<ButtonConatiner>
							<button type='submit' style={{ margin: '10px 0 0 0' }}>
								Sign Up
							</button>
							<LinkTagSignUp to='/Login'>
								Login In here <span>Sign In?</span>
							</LinkTagSignUp>
						</ButtonConatiner>
					</BodyContainer>
				</Form>
			</RegisterContainer>
		</>
	);
};

export default Register;
const RegisterContainer = styled(LoginContainer)``;
const InputBox = styled(InputContainer)`
	height: 260px;
`;
