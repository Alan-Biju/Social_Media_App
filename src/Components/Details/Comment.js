import React from 'react';
import styled from 'styled-components';

const Comment = ({Data}) => {
	return (
		<CommentBox>
			<Image
				src={Data.profileURL}
				alt='Profile Pic'
				onError={(e) => {
					e.target.src = '/image/profile.png';
				}}
			/>
            <p>{Data.message }</p>
		</CommentBox>
	);
};

export default Comment;
const CommentBox = styled.div`
	display: flex;
	align-items: center;
    padding:5px 0;
	p {
		font-size: 0.7rem;
		padding: 0 8px;
	}
`;
const Image = styled.img`
	width: 20px;
	height: 20px;
	border-radius: 50%;
`;
