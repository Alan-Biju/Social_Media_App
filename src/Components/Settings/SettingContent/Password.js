import React from 'react';
import styled from 'styled-components';
import { Form, InputSection, InputBox, Button } from './Edit';
const Password = () => {
    const passwordHandler = (e) => {
   	e.preventDefault();
		console.log('password');
    }
	return (
		<>
			<Form onSubmit={passwordHandler} >
				<PasswordSection>
					<Image>
						<h3>Reset password</h3>
						<img src='/image/password.png' alt='password' />
					</Image>
					<InputBox>
						<label htmlFor='password'>
							<p>New Password</p>
						</label>
						<input
							type='text'
							name=''
							id='password'
							placeholder='Your New password'
						/>
					</InputBox>
					<InputBox>
						<label htmlFor='password'>
							<p>Re-New Password</p>
						</label>
						<input
							type='text'
							name=''
							id='password'
							placeholder='Reenter your new password'
						/>
					</InputBox>
					<ResetButton> Reset Password </ResetButton>
				</PasswordSection>
			</Form>
		</>
	);
};

export default Password;
const PasswordSection = styled(InputSection)`
	height: 90%;
	
`;
const Image = styled.div`
	font-family: 'Manrope', sans-serif;
	text-align: center;
	img {
		width: 250px;
		object-fit: contain;
	}
	h3 {
		letter-spacing: 1px;
		padding: 10px 0;
	}
`;
const ResetButton = styled(Button)``;
