import React from 'react';
import styled from 'styled-components';
import { A } from 'hookrouter';
import colors from '../../styles/colors';

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 750px;
	height: 300px;
	margin: 160px auto 0px auto;
`;

const HomeCard = styled(A)`
	display: flex;
	flex-direction: column;
	width: 350px;
	height: 130px;
	background: linear-gradient(90deg, ${colors.purple1_70} 0%, ${colors.blue1_70} 100%);
	border-radius: 10px;
	margin: 10px;
	border: none;
	text-decoration: none;
	line-height: .9;

	&:hover {
		background: ${colors.purple1_70};
	}
`;

const HomeH1 = styled.h1`
	font-size: 32px;
	margin: 12px 0px 0px 28px;
	padding: 0px;
	color: ${colors.grey3};
`;

const homeCardContent = [
	{
		href: '/sound-design',
		line1: 'ux/ui',
		line2: 'design'
	},
	{
		href: '/sound-design',
		line1: 'ux/ui',
		line2: 'design'
	}
];

const Home = () => {
	const homeCards = () => {
		return <h1>Yaaay</h1>
	}
	return (
		<HomeWrapper>
			<HomeCard href="/sound-design">
				<HomeH1>ux/ui</HomeH1>
				<HomeH1>design</HomeH1>
			</HomeCard>
			{homeCards()}
		</HomeWrapper>
	);
};

export default Home;
