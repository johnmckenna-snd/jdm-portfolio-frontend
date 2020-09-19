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
	position: relative;
	width: 350px;
	height: 130px;
	background: linear-gradient(90deg, ${colors.purple1_70} 0%, ${colors.blue1_70} 100%);
	border-radius: 10px;
	margin: 10px;
	border: none;
	text-decoration: none;
	line-height: .9;
	transition: background 0.4s ease-in-out;
	z-index: 1;

	&:hover::before {
		opacity: 1;
	}

	&::before {
		position: absolute;
		border-radius: 10px;
	  content: "";
	  top: 0;
	  right: 0;
	  bottom: 0;
	  left: 0;
	  background: linear-gradient(45deg, ${colors.purple1_70} 0%, ${colors.blue1} 100%);
	  z-index: -1;
	  transition: opacity 0.5s linear;
	  opacity: 0;
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
		href: '/ux_ui-design',
		line1: 'ux/ui',
		line2: 'design'
	},
	{
		href: '/web-development',
		line1: 'web',
		line2: 'development'
	},
	{
		href: '/sound-design',
		line1: 'sound',
		line2: 'design'
	},
	{
		href: '/cad-drafting',
		line1: 'cad',
		line2: 'drafting'
	}
];

const Home = () => {
	const homeCards = () => {
		return homeCardContent.map((object, index) => {
			return (
				<HomeCard key={index} href={object.href}>
					<HomeH1>{object.line1}</HomeH1>
					<HomeH1>{object.line2}</HomeH1>
				</HomeCard>
			);
		});
	};
	return (
		<HomeWrapper>
			{homeCards()}
		</HomeWrapper>
	);
};

export default Home;
