import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Form, InputSection, InputBox, Button } from './Edit';
import { Info } from './Verify';
import { BsQuestionDiamond } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useAuth } from '../../../Context/AuthProvider';
import ErrorMessage from '../../../Reusable/ErrorMessage';
const Delete = () => {
	const deleteInput = useRef();
	const { Delete } = useAuth();
	const [message, setMessage] = useState(false);
	const DeleteHandler = async (e) => {
		e.preventDefault();
		if (deleteInput.current.value === 'DELETE') {
			try {
				await Delete();
			} catch (e) {
				setMessage(e.message);
			}
		} else {
			console.log('not');
			setMessage('DELETE does not match');
		}
	};
	return (
		<>
			<Form onSubmit={DeleteHandler}>
				<DeleteSection>
					<Image>
						<h3>Delete Account</h3>
						<LazyLoadImage src='/image/delete.svg' alt='delete' effect='blur' />
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
						<input type='text' name='' id='Name' ref={deleteInput} />
					</DeleteBox>
					<DeleteButton type='submit'>Delete Account</DeleteButton>
				</DeleteSection>
			</Form>
			{message && <ErrorMessage state={[message, setMessage]} />}
		</>
	);
};

export default Delete;
const DeleteSection = styled(InputSection)`
	min-height: 480px;
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
