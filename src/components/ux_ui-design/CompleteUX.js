import React from 'react';
import rfDatabase from '../../img/rf_database@2x.png';
import styled from 'styled-components';
import colors from '../../styles/colors';

const CompleteUXWrapper = styled.div`
	display: flex;
	flex-direction: row;

	@media (max-width: 560px) {
		flex-direction: column;
	}
`;

const CardP = styled.p`
	font-size: 16px;
	color: ${colors.grey4};
	line-height: 1.75;
	text-align: justify;
	margin-right: 28px;
	width: 50%;

	@media (max-width: 560px) {
		width: 100%;
	}
`;

const CompleteUXImage = styled.img`
	width: 50%;
	height: 80%;

	@media (max-width: 560px) {
		margin: auto;
	}
`;

const CompleteUX = () => {
	return (
		<CompleteUXWrapper>
			<CardP>I’ve developed digital products for three years now. Most of these are used in the theater industry from the start of planning, all the way through show run.</CardP>
			<CompleteUXImage src={rfDatabase} />
		</CompleteUXWrapper>
	);
};

export default CompleteUX;
