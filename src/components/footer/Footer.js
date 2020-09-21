import React from 'react';
import styled from 'styled-components';
import FooterLink from './FooterLink.js';
import FooterButton from './FooterButton.js';
import Modal from '../modal/Modal';
import useModal from '../modal/useModal';
import colors from '../../styles/colors';

const FooterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 40px;
	margin-left: 30px;
	justify-content: center;
`;

const FooterP = styled.p`
	font-size: 11px;
	color: ${colors.grey4};
	margin: 0 10px;
`;

const Footer = () => {
	const {isShowing, toggle} = useModal();

	return (
		<FooterWrapper>
			<FooterButton children="contact" onClick={toggle} />
			<FooterP>+</FooterP>
			<FooterLink href="https://www.jdmsounddesign.com" children="jdmsounddesign.com" />
			<FooterP>+</FooterP>
			<FooterLink href="https://www.isitstillapandemic.com" children="isitstillapandemic.com" />
			<Modal isShowing={isShowing} hide={toggle} children="Modal" />
		</FooterWrapper>
	);
};

export default Footer;
