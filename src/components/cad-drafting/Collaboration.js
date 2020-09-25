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

const Collaboration = () => {
	return (
		<CardP>All projects require collaboration. I understand that my job is not done once I export a plate. I am comfortable working with many different departments and disciplines to make sure that what gets drawn it what gets built.</CardP>
	);
};

export default Collaboration;
