import React from 'react';
import singStreetRacks from '../../img/sing-street-racks@2x.png';
import styled from 'styled-components';
import colors from '../../styles/colors';

const SystemDeploymentWrapper = styled.div`
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

const SystemDeploymentImage = styled.img`
	width: 50%;
	height: 80%;

	@media (max-width: 560px) {
		margin: auto;
	}
`;

const SystemDeployment = () => {
	return (
		<SystemDeploymentWrapper>
			<CardP>I am experienced in deploying systems for concerts, theater, and events. I have ran crews around the country. I am a IATSE union member as a part of the ACT local.</CardP>
			<SystemDeploymentImage src={singStreetRacks} />
		</SystemDeploymentWrapper>
	);
};

export default SystemDeployment;
