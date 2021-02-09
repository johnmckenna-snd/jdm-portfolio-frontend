import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const FooterA = styled.a`
	font-size: 11px;
	text-decoration: none;
	color: ${colors.grey4};
	margin: 0 10px;
	transition: color 0.2s ease-in-out;

	&:hover {
		color: ${colors.yellow1};
	}

	@media (max-width: 500px) {
		margin: 0 2px;
		text-align: center;
	}
`;

const FooterLink = ({children, href}) => {
	return (
		<FooterA href={href} target="_blank">{children}</FooterA>
	);
};

export default FooterLink;
