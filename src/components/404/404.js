import React from 'react';
import styled from 'styled-components';
import { navigate } from 'hookrouter';
import RoundedButton from '../button/RoundedButton';
import colors from '../../styles/colors';

const E404Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-top: 70px

	@media (max-width: 500px) {

	}
`;

const E404Card = styled.div`
	display: flex;
	flex-direction: column;
	width: 450px;
	height: 200px;
	background-color: white;
	background: linear-gradient(90deg, ${colors.purple1_70} 0%, ${colors.blue1_70} 100%);
	border-radius: 10px;

	@media (max-width: 500px) {
		width: 80%;
		height: 60%;
	}
`;

const E404H1 = styled.h1`
	font-size: 36px;
	margin-left: 28px;
	color: ${colors.grey3};
`;

const E404P = styled.p`
	font-size: 12px;
	color: ${colors.grey4};
	margin-left: 28px;
`;

const E404 = () => {
	const handleClick = (e) => {
		e.preventDefault();
		navigate('/');
	};

	return (
		<E404Wrapper>
			<E404Card>
				<E404H1>aw, poop. - 404 error</E404H1>
				<E404P>No going back now, click below to go home!</E404P>
				<RoundedButton onClick={handleClick} children="Home" />
			</E404Card>
		</E404Wrapper>
	);
};

export default E404;
