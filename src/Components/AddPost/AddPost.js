import React, { useState } from 'react';
import styled from 'styled-components';
import { VscAdd } from 'react-icons/vsc';
import { FaRegWindowClose } from 'react-icons/fa';
const AddPost = () => {
	const [image, setImage] = useState(null);
	const removeImage = () => {
		const box = document.getElementById('imagePreviewBox');
		box.style.display = 'none';
	};
	const handleChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
			const src1 = URL.createObjectURL(e.target.files[0]);
			const preview1 = document.getElementById('imagePreview');
			const box = document.getElementById('imagePreviewBox');
			preview1.src = src1;
			box.style.display = 'flex';
		}
	};
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
						<label htmlFor='fileInput'>
							<div>
								<Add />
								<p>Add photos/Gifs Here</p>
							</div>
						</label>
						<input type='file' id='fileInput' onChange={handleChange} />
					</DropFile>
					<ImagePerview id='imagePreviewBox'>
						<img id='imagePreview' alt='' />
						<p>
							{image && image.name.split('.')[0]}
							<Close onClick={() => removeImage()} />
						</p>
					</ImagePerview>
				</AddPostBox>
			</AddPostContainer>
		</>
	);
};

export default AddPost;
const AddPostContainer = styled.div`
	width: 100%;
	height: calc(100% - 50px);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	@media (max-width: 450px) {
		height: calc(100% - 100px);
	}
`;
const AddPostBox = styled.form`
	width: 100%;
	max-width: 400px;
	min-width: 230px;
	height: 500px;
	background-color: #ffffff;
	padding: 10px;
	font-family: 'Manrope', sans-serif;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius:8px ;
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
			height: 120px;
			background-color: #f5f4f4;
			position: relative;
		}
		p {
			letter-spacing: 1px;
			font-size: 0.8rem;
			color: #b8b0b0;
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translate(-50%, -50%);
			font-family: 'Raleway', sans-serif;
			text-transform: capitalize;
            white-space: nowrap;
		}
	}
	input {
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
const ImagePerview = styled.div`
	display: none;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
	img {
		width: 120px;
		border-radius: 10px;
	}
	p {
		font-size: 0.8rem;
		text-transform: capitalize;
		font-weight: 500;
		font-family: 'Manrope', sans-serif;
		letter-spacing: 1px;
		display: flex;
		align-items: center;
		color: #414141;
	}
`;
const Close = styled(FaRegWindowClose)`
	margin-left: 10px;
	font-size: 1.3rem;
	color: #504d4d;
	cursor: pointer;
`;
