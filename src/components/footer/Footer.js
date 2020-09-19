import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const FooterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 40px;
	margin-left: 40px;
	justify-content: center;
`;

const FooterP = styled.p`
	font-size: 11px;
	color: ${colors.grey4};
	margin: 0 10px;
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<FooterP>contact</FooterP>
			<FooterP>+</FooterP>
			<FooterP>jdmsounddesign.com</FooterP>
			<FooterP>+</FooterP>
			<FooterP>isitstillapandemic.com</FooterP>
		</FooterWrapper>
	);
};

export default Footer;
