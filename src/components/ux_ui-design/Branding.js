import React from 'react';
import sndwrksFlowLogo from '../../img/sndwrks_flow logo@72x@2x.png';
import styled from 'styled-components';
import colors from '../../styles/colors';

const BrandingWrapper = styled.div`
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
	text-align: left;
	width: 50%;

	@media (max-width: 560px) {
		width: 100%;
	}
`;

const BrandingImage = styled.img`
	width: 50%;
	height: 80%;

	@media (max-width: 560px) {
		margin: auto;
	}
`;

const Branding = () => {
	return (
		<BrandingWrapper>
			<CardP>-CakePop - The Podcast <br /> -A dark startup (references available upon request) <br /> -sndwrks LLC</CardP>
			<BrandingImage src={sndwrksFlowLogo} />
		</BrandingWrapper>
	);
};

export default Branding;
