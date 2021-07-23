import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { HomeContainer } from '../../Pages/Home';
import HelperFirestoreFunctions from '../../_FirebaseQueries/HelperFirestoreFunctions';
import DetailsZone from './Details';
import ImageBox from './ImgeBox';
const PostDetails = () => {
	const { uid, id } = useParams();
	const { Details, postDetails } = HelperFirestoreFunctions();
	useEffect(() => {
		id && Details(uid, id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, uid]);
	return (
		<DetailsConatainer>
			<DetailsBox>
				<ImageBox Url={postDetails && postDetails.image} />
				<DetailsZone Data={postDetails} />
			</DetailsBox>
		</DetailsConatainer>
	);
};

export default PostDetails;
const DetailsConatainer = styled(HomeContainer)`
	justify-content: center;
`;
const DetailsBox = styled.div`
	width: 100%;
	max-width: 700px;
	min-width: 300px;
	max-height: 460px;
	display: flex;
	background-color: #ffffff;
	overflow: hidden;
	@media (max-width: 750px) {
		flex-direction: column;
		min-height: 100%;
		overflow-y: scroll;
	}
`;
