import React, { useState } from 'react';
import styled from 'styled-components';
import { Link ,useHistory} from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';
import Input from '../../Reusable/Input';
export default function Login () {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const { login } = useAuth();
	const loginHandler =  (e) => {
		e.preventDefault();
		try {
            setMessage('');
			 login(email, password);
			setEmail('');
			setPassword('');
			history.push('/')
		} catch (e) {
			setMessage(() => e.message);
		}
	};
	return (
		<>
			<LoginContainer>
				<Form autoComplete='off' onSubmit={loginHandler}>
					<TitleContainer>
						<Title>Login</Title>
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
							<Input type='text' label='Your Email' state={[email, setEmail]} />
							<Input
								type='password'
								label='Your Password'
								state={[password, setPassword]}
							/>
							<LinkTag to='/Reset'>Forget Password ?</LinkTag>
						</InputContainer>
						<ButtonConatiner>
							<button type='submit'>LOG IN</button>
							<LinkTagSignUp to='/SignUp'>
								Don't have an account? <span>Sign up</span>
							</LinkTagSignUp>
						</ButtonConatiner>
					</BodyContainer>
				</Form>
			</LoginContainer>
		</>
	);
}
export const LoginContainer = styled.div`
	min-width: 100%;
	min-height: 100%;
	background-color: #f2f2f2;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url('image/back1.svg');
	background-repeat: no-repeat;
	background-size: contain;
	
`;
export const Message = styled.p`
	width: 100%;
	text-align: center;
	padding: 15px 0;
	font-family: 'Raleway', sans-serif;
	color: #ff2e63;
	font-weight: 500;
	text-transform: uppercase;
	font-size: 0.7rem;
`;
export const Form = styled.form`
	max-width: 330px;
	padding:5px;
	min-width: 240px;
	width: 100%;
	height: 500px;
	background-color: #ffffff;
	border-radius: 5px;
	box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
`;
export const TitleContainer = styled.div`
	background-color: #e0e0e0;
	width: 100%;
	height: 100px;
	padding: 35px;
	display: flex;
	align-items: center;
	background-image: url('image/back.svg');
	background-repeat: no-repeat;
	background-size: 150% 100%;
`;
export const Title = styled.p`
	font-family: 'Raleway', sans-serif;
	font-size: 2rem;
	font-weight: 700;
	letter-spacing: 1px;
`;
export const BodyContainer = styled.div``;
export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	padding: 35px;
	height: 250px;
`;
export const LinkTag = styled(Link)`
	font-size: 0.7rem;
	width: 100%;
	text-align: right;
	color: #746b6b;
	text-decoration: none;
`;
export const LinkTagSignUp = styled(LinkTag)`
	text-align: center;
      padding:10px;
      span{
            color:black;
            font-weight:600;
      }
`;
export const ButtonConatiner = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	button {
		width: 200px;
		display: inline-block;
		padding: 0.7em 1.7em;
		margin: 0 0.3em 0.3em 0;
		border-radius: 0.2em;
		font-family: 'Raleway', sans-serif;
		font-weight: 500;
		letter-spacing: 1px;
		color: #ffffff;
		background-color: #00adb5;
		text-align: center;
		border: none;
		outline: none;
		cursor: pointer;
		&:active {
			box-shadow: inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.15),
				inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
		}
	}
`;
