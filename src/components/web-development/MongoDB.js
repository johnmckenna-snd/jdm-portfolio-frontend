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

const MongoDB = () => {
	return (
		<CardP>I have used MongoDB for a startup I am working with (available on request). It stores users and searches. I am currently working on aggregating over 30gb of documents to create a database for further development of the startup’s website. I have taken MongoDB 001 and 121 from MongoDB University.</CardP>
	);
};

export default MongoDB;
