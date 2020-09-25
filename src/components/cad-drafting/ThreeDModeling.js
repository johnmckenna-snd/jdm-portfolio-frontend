import React from 'react';
import threeDModelingScreenshot from '../../img/3dmodeling_screenshot@2x.png';
import styled from 'styled-components';
import colors from '../../styles/colors';

const ThreeDModelingWrapper = styled.div`
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

const ThreeDModelingImage = styled.img`
	width: 45%;
	height: 80%;

	@media (max-width: 560px) {
		margin: auto;
	}
`;

const ThreeDModeling = () => {
	return (
		<ThreeDModelingWrapper>
			<CardP>I am well versed in 3d modeling and 3d workflows for Vectorworks. I draft almost everything in 3d.</CardP>
			<ThreeDModelingImage src={threeDModelingScreenshot} />
		</ThreeDModelingWrapper>
	);
};

export default ThreeDModeling;
