import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, InputSection } from './Edit';
import { TiArrowRight } from 'react-icons/ti';
import { BsQuestionDiamond } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useAuth } from '../../../Context/AuthProvider';
import Badge from '../../../Reusable/Badge';
import { useData } from '../../../Context/DataProvider';
import ErrorMessage from '../../../Reusable/ErrorMessage';
const Verify = () => {
	const [message, setMessage] = useState(false);
	const { profile, isverified } = useData();
	const { VerifyMail } = useAuth();
	const VerifyHandler = async (e) => {
		e.preventDefault();
		try {
			await VerifyMail();
			setMessage('Email sent');
		} catch (e) {
			setMessage(e.message);
		}
	};
	return (
		<>
			<Form onSubmit={VerifyHandler}>
				<VerifySection>
					<Image>
						<h3>Verify your account</h3>
						<LazyLoadImage src='/image/verify.svg' alt='@Email' effect='blur' />
					</Image>
					<Demo>
						<p>{profile.name}</p>
						<TiArrowRight />
						<p>
							{profile.name}
							<Badge />
						</p>
					</Demo>
					<Info>
						<h6>
							A verified badge is a check that appears next to your account's
							name to indicate that the account is the authentic presense of a
							notable public figure or entity it represents
						</h6>
						<p>
							<BsQuestionDiamond /> We'll email you instructions on how to
							verify the account
						</p>
					</Info>
					<Button disabled={isverified}>
						{isverified ? 'Verified' : 'Send'}
					</Button>
				</VerifySection>
			</Form>
			{message && <ErrorMessage state={[message, setMessage]} />}
		</>
	);
};

export default Verify;
const VerifySection = styled(InputSection)`
	height: 90%;
	@media (max-width: 750px) {
		height: 100%;
	}
`;
const Image = styled.div`
	font-family: 'Manrope', sans-serif;
	text-align: center;
	img {
		width: 300px;
		object-fit: contain;
	}
	h3 {
		letter-spacing: 1px;
	}
`;
const Demo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	min-width: 270px;
	p {
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Manrope', sans-serif;
		font-size: 0.9rem;
		font-weight: 600;
		text-transform: capitalize;
	}
`;
export const Info = styled.div`
	font-family: 'Manrope', sans-serif;
	width: 80%;
	text-align: center;

	h6 {
		font-size: 0.8rem;
		font-weight: 500;
		color: #797979;
	}
	p {
		font-size: 0.9rem;
		padding: 10px 0;
		font-weight: 600;
	}
	@media (max-width: 750px) {
		width: 98%;
	}
`;
const Button = styled.button`
	border: none;
	outline: none;
	width: 150px;
	text-align: center;
	padding: 6px 10px;
	font-size: 0.8rem;
	letter-spacing: 1px;
	background: #419bf0;
	cursor: pointer;
	transition-duration: 0.5s;
	border-radius: 3px;
	font-family: 'Manrope', sans-serif;
	color: #f6f6f6;
	font-weight: 600;
	&:hover {
		background: #368ad8;
	}
	&:disabled {
		background-color: #918b8b;
		cursor: not-allowed;
	}
`;
