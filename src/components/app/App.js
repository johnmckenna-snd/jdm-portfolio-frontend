import React, {Fragment} from 'react';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import Nav from '../nav/Nav';
import Router from '../router/Router';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const GlobalStyle = createGlobalStyle`
	${normalize}
	html {
		height: 100%;
	}
	body {
		font-family: ${fonts.fontFamily};
		font-weight: ${fonts.regular.weight};
		font-style: ${fonts.regular.style};
		font-size: 14px;
		background: ${colors.grey1};
		background: linear-gradient(90deg, ${colors.green1} 0%, ${colors.yellow1} 100%);
	}

	#root {
		width: 100%;
		height: 100%;
	}
`;

const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Nav />
			<Router />
		</Fragment>
	);
};

export default App;
