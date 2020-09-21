import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const FooterButton = styled.button`
	font-size: 11px;
	text-decoration: none;
	color: ${colors.grey4};
	margin: -.5px 10px 0 10px;
	transition: color 0.2s ease-in-out;
	background: transparent;
	border: none;
	outline: none;
	line-height: 0;
	height: 12px;

	&:hover {
		color: ${colors.purple1};
	}
`;

const FooterTextButton = ({children, onClick}) => {
	return (
		<FooterButton onClick={onClick}>{children}</FooterButton>
	);
};

export default FooterTextButton;
