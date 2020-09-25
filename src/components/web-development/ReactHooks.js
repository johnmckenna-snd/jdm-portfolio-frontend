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

const ReactHooks = () => {
	return (
		<CardP>React helps development be faster and more flexible. I have built two websites (including this one) with React Hooks. I have been working with React for 3 months, and I am familiar from start to build with create-react-app. I have used axios, Styled Components, React Router, hooks router, React Window, react transition group, and react google autocomplete.</CardP>
	);
};

export default ReactHooks;
