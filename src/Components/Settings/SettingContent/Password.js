import React, { useRef } from 'react';
import styled from 'styled-components';
import { Form, InputSection, InputBox, Button } from './Edit';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Password = () => {
	const Password = useRef();
	const Re_Password = useRef();

	const passwordHandler = (e) => {
		e.preventDefault();
		if (Password.current.value === Re_Password.current.value) {
			console.log('cc');
		};
	};
	return (
		<>
			<Form onSubmit={passwordHandler}>
				<PasswordSection>
					<Image>
						<h3>Reset password</h3>
						<LazyLoadImage
							src='/image/password.png'
							alt='password'
							effect='blur'
						/>
					</Image>
					<InputBox>
						<label htmlFor='password'>
							<p>New Password</p>
						</label>
						<input
							ref={Password}
							type='text'
							name=''
							id='password'
							placeholder='Your New password'
							required
						/>
					</InputBox>
					<InputBox>
						<label htmlFor='re-password'>
							<p>Re-New Password</p>
						</label>
						<input
							ref={Re_Password}
							type='password'
							name=''
							id='re-password'
							placeholder='Reenter your new password'
							autoComplete='on'
							required
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
	min-height: 480px;
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
