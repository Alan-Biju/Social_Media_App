import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Error404 = () => {
	return (
		<>
			<Notfound>
				<NotfoundBox>
					<Notfound404>
						<h1>Oops!</h1>
						<h2>404 - The Page can't be found</h2>
					</Notfound404>
					<BackLink to='/'>Go TO Homepage</BackLink>
				</NotfoundBox>
			</Notfound>
		</>
	);
};

export default Error404;
const Notfound = styled.div`
	position: relative;
	height: 100vh;
`;
const NotfoundBox = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	max-width: 520px;
	width: 100%;
	line-height: 1.4;
	text-align: center;
`;
const Notfound404 = styled.div`
	position: relative;
	height: 200px;
	margin: 0px auto 20px;
	z-index: -1;
	h1 {
		font-family: 'Montserrat', sans-serif;
		font-size: 236px;
		font-weight: 200;
		margin: 0px;
		color: #211b19;
		text-transform: uppercase;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		@media (max-width: 725px) {
			font-size: 148px;
		}
		@media (max-width: 480px) {
			font-size: 86px;
		}
	}
	h2 {
		font-family: 'Montserrat', sans-serif;
		font-size: 28px;
		font-weight: 400;
		text-transform: uppercase;
		color: #211b19;
		background: #fff;
		padding: 10px 5px;
		margin: auto;
		display: inline-block;
		position: absolute;
		bottom: 0px;
		left: 0;
		right: 0;
		@media (max-width: 480px) {
			font-size: 16px;
		}
	}
	@media (max-width: 480px) {
		height: 148px;
		margin: 0px auto 10px;
	}
`;
const BackLink = styled(Link)`
	font-family: 'Montserrat', sans-serif;
	display: inline-block;
	font-weight: 700;
	text-decoration: none;
	color: #fff;
	text-transform: uppercase;
	padding: 13px 23px;
	background: #ff6300;
	font-size: 18px;
	-webkit-transition: 0.2s all;
	transition: 0.2s all;
	&:hover {
		color: #ff6300;
		background: #211b19;
	}
	@media (max-width: 480px) {
		padding: 7px 15px;
		font-size: 14px;
	}
`;