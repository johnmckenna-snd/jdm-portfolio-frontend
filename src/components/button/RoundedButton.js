import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const ButtonStyle = styled.button`
	width: 40%;
	height: 40px;
	border-radius: 20px;
	border: solid;
	border-width: .5px;
	border-color: ${colors.grey3};
	background-color: transparent;
	margin: 10px auto;
	font-size: 14px;
	outline: none;

	&:hover {
		background-color: ${colors.grey1_40};
	}

	&:active {
		background-color: ${colors.purple1_70};
	}
`;

const RoundedButton = ({onClick, children}) => {
	return (
		<ButtonStyle onClick={onClick}>{children}</ButtonStyle>
	);
};

export default RoundedButton;
