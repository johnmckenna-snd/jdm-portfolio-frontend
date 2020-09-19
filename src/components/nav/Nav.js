import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const NavWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: baseline;
	justify-content: center;
	flex-wrap: wrap;
	margin-left: 10px;
`;

const NavH1 = styled.h1`
	color: ${colors.grey3};
	font-weight: ${fonts.bold.weight};
	font-size: 26px;
	margin-right: 40px;
	margin-top: 46px;
`;

const NavP = styled.p`
color: ${colors.grey4};
font-weight: ${fonts.regular.weight};
font-size: 11px;
margin-left: 46px;
`;

const Nav = () => {
	return (
		<NavWrapper>
			<NavH1>john</NavH1>
			<NavH1>mckenna</NavH1>
			<NavP>sound + web designer</NavP>
		</NavWrapper>
	);
};

export default Nav;
