import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { navigate } from 'hookrouter';
import { Transition } from 'react-transition-group';
import colors from '../../styles/colors';

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 750px;
	height: 300px;
	margin: 160px auto 0px auto;
	transition: 1s;
	transform: translateX(${({ state }) => {
		switch (state) {
			case 'entering':
				return '0';
			case 'entered':
				return '0';
			case 'exiting':
				return '-2000px';
			case 'exited':;
				return '-2000px';
		};
	}});
	timing: cubic-bezier(0, 0.575, 0.565, 1.000);

	@media (max-height: 700px) {
		margin: 80px auto 0px auto;
	}

	@media (max-width: 1300px) {
		margin: 80px auto 0px auto;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 700px) {
		margin: 30px auto 0px auto;
		width: 100%;
		height: 100%;
		flex-direction: column;
		flex-wrap: nowrap;
		flex: 1;
	}
`;

const HomeCard = styled.button`
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
	outline: none;

	@media (max-width: 1300px) {
		width: 40%;
		height: 35%;
		margin-top: 0;
	}

	@media (max-width: 700px) {
		width: 80%;
		height: 100px;
	}

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
	&:active {
		background: white;
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
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		setTimeout(() => setAnimate(true), 15);
		console.log('useEffect in home triggered');
	}, []);

	const homeCards = () => {
		return homeCardContent.map((object, index) => {
			return (
				<HomeCard key={index} onClick={(e) => {
					e.preventDefault();
					setAnimate(false);
					setTimeout(() => navigate(object.href), 500);
				}}>
					<HomeH1>{object.line1}</HomeH1>
					<HomeH1>{object.line2}</HomeH1>
				</HomeCard>
			);
		});
	};

	return (
		<Transition in={animate} timeout={500} id="transition">
			{(state) => (
				// state change: exited -> entering -> entered -> exiting -> exited
				<HomeWrapper state={state}>
					{homeCards()}
				</HomeWrapper>
			)}
		</Transition>

	);
};

export default Home;
