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

const AWS = () => {
	return (
		<CardP>I have deployed two websites on aws with cloud front, elastic beanstalk, s3 static-served frontends, ses, and workmail. I am versed in getting websites up and running and simple CI strategies.</CardP>
	);
};

export default AWS;
