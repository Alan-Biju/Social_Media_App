import React from 'react';
import styled from 'styled-components';
import { Form, InputSection } from './Edit';
import { HiBadgeCheck } from 'react-icons/hi';
import { TiArrowRight } from 'react-icons/ti';
import { BsQuestionDiamond } from 'react-icons/bs';

const Verify = () => {
	const VerifyHandler = (e) => {
		e.preventDefault();
		console.log('verify');
	};
	return (
		<>
			<Form onSubmit={VerifyHandler}>
				<VerifySection>
					<Image>
						<h3>Verify your account</h3>
						<img src='/image/verify.svg' alt='@Email' />
					</Image>
					<Demo>
						<p>Alan Biju</p>
						<TiArrowRight />
						<p>
							Alan biju
							<Check />
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
					<Button>Send</Button>
				</VerifySection>
			</Form>
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
const Check = styled(HiBadgeCheck)`
	color: #3aa9cb;
	font-size: 1.2rem;
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
`;
