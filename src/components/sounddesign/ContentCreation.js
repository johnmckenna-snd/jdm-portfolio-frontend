import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const CardP = styled.p`
	font-size: 16px;
	color: ${colors.grey4};
	line-height: 1.75;
	text-align: justify;

	@media (max-width: 420px) {
		line-height: 1.5;
		margin-top: -10px;
	}
`;

const ContentCreation = () => {
	return (
		<CardP>Content, especially sound, can have an outsize impact on how well the story is received. I have made music and sound effects for shows I have designed and assisted on. I also have experience programming surround effects like panning and moving sounds. Audio samples available upon request. I am also a USA 829 Sound Designer.</CardP>
	);
};

export default ContentCreation;
