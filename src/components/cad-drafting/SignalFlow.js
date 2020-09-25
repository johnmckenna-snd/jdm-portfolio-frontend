import React from 'react';
import signalFlowScreenshot from '../../img/flow_screenshot@2x.png';
import styled from 'styled-components';
import colors from '../../styles/colors';

const SignalFlowWrapper = styled.div`
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

const SignalFlowImage = styled.img`
	width: 50%;
	height: 80%;

	@media (max-width: 560px) {
		margin: auto;
	}
`;

const SignalFlow = () => {
	return (
		<SignalFlowWrapper>
			<CardP>I have designed, configured, and deployed extensive audio/control networks. I have experience, using fiber and copper, with VLANs, trunking, switch stacks, and WAPs.</CardP>
			<SignalFlowImage src={signalFlowScreenshot} />
		</SignalFlowWrapper>
	);
};

export default SignalFlow;
