import React from 'react';
import styled from 'styled-components';
import FooterLink from './FooterLink.js';
import FooterButton from './FooterButton.js';
import Modal from '../modal/Modal';
import ContactModal from '../modal/ContactModal';
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

	@media (max-width: 500px) {
		margin-top: 10px;
		margin-left: auto;
		position: static;
		align-self: flex-end;
		flex-direction: column;
		height: 110px;
	}
`;

const FooterP = styled.p`
	font-size: 11px;
	color: ${colors.grey4};
	margin: 0 10px;

	@media (max-width: 500px) {
		margin: 0 2px;
		text-align: center;
	}
`;

const Footer = () => {
	const {isShowing, toggle} = useModal();

	return (
		<FooterWrapper>
			<FooterButton children="contact" onClick={toggle} />
			<FooterP>+</FooterP>
			<FooterLink href="https://www.jdmsounddesign.com" children="jdmsounddesign.com" />
			<FooterP>+</FooterP>
			<FooterLink href="https://patents.google.com/patent/US7301455" children="look at one of my patents here" />
			<FooterP>+</FooterP>
			<FooterLink href="https://github.com/johnmckenna-snd" children="my github" />
			<Modal isShowing={isShowing} hide={toggle} children={<ContactModal />} />
		</FooterWrapper>
	);
};

export default Footer;
