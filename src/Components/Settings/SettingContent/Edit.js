import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useData } from '../../../Context/DataProvider';
import HelperFirestoreFunctions from '../../../_FirebaseQueries/HelperFirestoreFunctions';
import Avatar from '../../Profile/Avatar';

const Edit = () => {
	const { profile } = useData();
	const { ProfileUpdate } = HelperFirestoreFunctions();
	const [name, setName] = useState('');
	const [website, setWebsite] = useState('');
	const [bio, setBio] = useState('');
	const history = useHistory();
	useEffect(() => {
		if (profile) {
			setName(profile.name);
			setWebsite(profile.website);
			setBio(profile.bio);
		}
	}, [profile]);
	const UpdateHandler = async (e) => {
		e.preventDefault();

		try {
			await ProfileUpdate(name, website, bio);
			history.push('/Profile');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<Form onSubmit={UpdateHandler}>
				<InputSection>
					<Avatar />
					<InputBox>
						<label htmlFor='Name'>
							<p>Name</p>
						</label>
						<input
							value={name}
							type='text'
							name=''
							id='Name'
							placeholder='Your Name'
							onChange={(e) => setName(e.target.value)}
						/>
					</InputBox>
					<InputBox>
						<label htmlFor='Website'>
							<p>Website</p>
						</label>
						<input
							value={website}
							type='text'
							name=''
							id='Website'
							placeholder='Your website'
							onChange={(e) => setWebsite(e.target.value)}
						/>
					</InputBox>
					<InputBox>
						<label htmlFor='Bio'>
							<p>Bio</p>
						</label>

						<textarea
							value={bio}
							type='text'
							name=''
							id='Bio'
							placeholder='Your Bio'
							onChange={(e) => setBio(e.target.value)}
						/>
					</InputBox>
					<Button type='submit'>Edit</Button>
				</InputSection>
			</Form>
		</>
	);
};

export default Edit;
export const Form = styled.form`
	height: 100%;
	min-height: 500px;
	width: 98%;
	background-color: #ffffff;
	padding: 20px;
	display: flex;
	align-items: center;
	flex-direction: column;
	@media (max-width: 720px) {
		width: 100%;
	}
`;
export const InputSection = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-around;
	min-height: 400px;
	background-color: inherit;
`;
export const InputBox = styled.div`
	width: 100%;
	max-width: 450px;
	min-width: 230px;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	label {
		text-align: right;
		p {
			margin-right: 30px;
			font-family: 'Manrope', sans-serif;
			font-size: 0.8rem;
			font-weight: 600;
			padding: 10px 0 10px 0;
		}
	}
	textarea {
		resize: none;
		height: 100px;
		margin-bottom: 20px;
	}
	input,
	textarea {
		width: 100%;
		padding: 8px;
		font-size: 17px;
		border: none;
		outline: none;
		font-family: 'Raleway', sans-serif;
		text-transform: capitalize;
		box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
			rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
		border-radius: 5px;
		&::placeholder {
			font-size: 0.6rem;
			letter-spacing: 1px;
			font-family: 'Raleway', sans-serif;
			@media (max-width: 300px) {
				font-size: 0.6rem;
			}
		}
	}
	@media (max-width: 550px) {
		width: 100%;
	}
`;
export const Button = styled.button`
	border: none;
	outline: none;
	width: 150px;
	height: 30px;
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
