import React from 'react';
import symbolLibraryScreenshot from '../../img/symbol-library-screenshot@2x.png';
import styled from 'styled-components';
import colors from '../../styles/colors';

const SymbolLibrariesWrapper = styled.div`
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

const SymbolLibrariesImage = styled.img`
	width: 50%;
	height: 80%;

	@media (max-width: 560px) {
		margin: auto;
	}
`;

const SymbolLibraries = () => {
	return (
		<SymbolLibrariesWrapper>
			<CardP>Symbol Libraries exist to make the drafters life easier. I have developed multiple libraries in Vectorworks and Omnigraffle that are used by multiple people in NYC.</CardP>
			<SymbolLibrariesImage src={symbolLibraryScreenshot} />
		</SymbolLibrariesWrapper>
	);
};

export default SymbolLibraries;
