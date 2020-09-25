import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const DetailCardImageWrapper = styled.div`
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

const DetailCardImageImage = styled.img`
	width: 50%;
	height: 80%;

	@media (max-width: 560px) {
		margin: auto;
	}
`;

const DetailCardImage = ({ text, image }) => {
	return (
		<DetailCardImageWrapper>
			<CardP>{text}</CardP>
			<DetailCardImageImage src={image} />
		</DetailCardImageWrapper>
	);
};

export default DetailCardImage;
