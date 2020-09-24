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

const ResponsiveUIDesign = () => {
	return (
		<CardP>I’ve designed two websites (including this one) with fully responsive designs. Additionally, I’ve designed UI for two responsive Filemaker databases that are currently used on Broadway (Ain’t Too Proud, Diana, MJ the Musical, True West, and more). I am comfortable using illustrator and xd for wire framing and prototyping.</CardP>
	);
};

export default ResponsiveUIDesign;
