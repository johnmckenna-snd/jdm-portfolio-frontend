import React from 'react';
import mappSection from '../../img/truewest_mapp_section@2x.png';
import styled from 'styled-components';
import colors from '../../styles/colors';

const SystemDesignWrapper = styled.div`
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

const SystemDesignImage = styled.img`
	width: 50%;
	height: 80%;

	@media (max-width: 560px) {
		margin: auto;
	}
`;

const SystemDesign = () => {
	return (
		<SystemDesignWrapper>
			<CardP>I have designed sound and communication systems for shows on Broadway and across the county. I usually do acoustical modeling then drafting and equipment specifications.</CardP>
			<SystemDesignImage src={mappSection} />
		</SystemDesignWrapper>
	);
};

export default SystemDesign;
