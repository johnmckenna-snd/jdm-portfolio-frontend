import React from 'react';
import cakePop from '../../img/cake_pop@72x@2x.png';
import styled from 'styled-components';
import colors from '../../styles/colors';

const GraphicDesignWrapper = styled.div`
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

const GraphicDesignImage = styled.img`
	width: 50%;
	height: 80%;
	@media (max-width: 560px) {
		margin: auto;
	}
`;

const GraphicDesign = () => {
	return (
		<GraphicDesignWrapper>
			<CardP>All of my designs, I’ve done some form of graphic design for them. Although I have no formal graphic design training, I am continuously curious about learning more.</CardP>
			<GraphicDesignImage src={cakePop} />
		</GraphicDesignWrapper>
	);
};

export default GraphicDesign;
