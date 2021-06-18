import React from 'react';
import styled from 'styled-components';
import { VscAdd } from 'react-icons/vsc';
const AddPost = () => {
	return (
		<>
			<AddPostContainer>
				<AddPostBox>
					<Heading>
						<p>Add New Post</p>
					</Heading>
					<InputField>
						<input type='text' name='caption' placeholder='Caption' required />
						<textarea name='description' placeholder='Description' required />
					</InputField>
					<DropFile>
						<label htmlFor='file'>
							<div>
								<Add />
							</div>
						</label>
						<input type='file' id='file' />
					</DropFile>
				</AddPostBox>
			</AddPostContainer>
		</>
	);
};

export default AddPost;
const AddPostContainer = styled.div`
	width: 100%;
	height: calc(100% - 60px);
	display: flex;
	align-items: center;
	justify-content: center;
    padding: 10px;
`;
const AddPostBox = styled.form`
	width: 100%;
	max-width: 450px;
	min-width: 230px;
	height: 500px;
	background-color: #ffffff;
	padding: 10px;
	font-family: 'Manrope', sans-serif;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const Heading = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	p {
		font-weight: 500;
		font-size: 1.4rem;
		letter-spacing: 1px;
	}
`;
const InputField = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: space-around;
	height: 150px;
	input {
		width: 100%;
	}
	input[type='text'] {
		padding: 8px;
		font-size: 17px;
		outline: none;
		font-family: 'Manrope', sans-serif;
		text-transform: capitalize;
		border-radius: 5px;
		border: 1px solid #e2e2e2;
		&::placeholder {
			font-size: 0.7rem;
			letter-spacing: 1px;
			font-family: 'Manrope', sans-serif;
			@media (max-width: 300px) {
				font-size: 0.6rem;
			}
		}
	}
	textarea {
		resize: none;
		width: 100%;
		height: 80px;
		padding: 8px;
		font-size: 17px;
		outline: none;
		font-family: 'Raleway', sans-serif;
		text-transform: capitalize;
		border-radius: 5px;
		border: 1px solid #e2e2e2;
		&::placeholder {
			font-size: 0.7rem;
			letter-spacing: 1px;
			font-family: 'Raleway', sans-serif;
			@media (max-width: 300px) {
				font-size: 0.6rem;
			}
		}
	}
`;
const DropFile = styled.div`
	label {
		div {
			width: 100%;
			height: 150px;
			background-color: #ebebeb;
            position: relative;
		}
	}
    input{
       display: none;
       pointer-events: none;
    }
`;
const Add = styled(VscAdd)`
	font-size: 3rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: #3aa9cb;
`;
