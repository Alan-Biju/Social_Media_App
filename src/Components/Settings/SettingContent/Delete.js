import React from 'react';
import styled from 'styled-components';
import { Form, InputSection, InputBox, Button } from './Edit';
import { Info } from './Verify';
import { BsQuestionDiamond } from 'react-icons/bs';

const Delete = () => {
	return (
		<>
			<Form>
				<DeleteSection>
					<Image>
						<h3>Delete Account</h3>
						<img src='/image/delete.svg' alt='delete' />
					</Image>
					<Info>
						<h6>
							We will immediately delete all of your posts, along with all of
							your data, profile, issues, pull requests, and Pages sites. You
							will no longer can be accesed, and your username will not be
							available to anyone on app.
						</h6>
						<p>
							<BsQuestionDiamond /> Once you delete your account, there is no
							going back. Please be certain.
						</p>
					</Info>
					<DeleteBox>
						<label htmlFor='Name'>
							<p>To continue this type ' DELETE' </p>
						</label>
						<input type='text' name='' id='Name' />
					</DeleteBox>
					<DeleteButton>Delete Account</DeleteButton>
				</DeleteSection>
			</Form>
		</>
	);
};

export default Delete;
const DeleteSection = styled(InputSection)`
	min-height: 500px;
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
		padding: 10px 0;
	}
`;
const DeleteBox = styled(InputBox)`
	label {
		p {
			font-size: 0.7rem;
			color: #8d8989;
		}
	}
`;
const DeleteButton = styled(Button)`
	margin: 10px 0;
	background-color: #d12d50;
	&:hover {
		background-color: #b81538;
	}
`;
