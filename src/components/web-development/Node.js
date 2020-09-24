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

const Node = () => {
	return (
		<CardP>I built a node/express backend for a startup I’m working with (available on request). The server uses packages:  aws-sdk (for ses), mongodb (connecting to mongodb atlas), and node-fetch (to retrieve data from an api). I have also used node to write one serverless backend using aws-lambda to host.</CardP>
	);
};

export default Node;
