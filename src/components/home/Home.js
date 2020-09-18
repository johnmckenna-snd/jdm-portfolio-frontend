import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 724px;
	height: 300px;
	background: white;
	margin: auto;
`;

const Home = () => {
	return (
		<HomeWrapper>
			<h1>it's the homepage</h1>
		</HomeWrapper>
	);
};

export default Home;
