import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { navigate } from 'hookrouter';
import { Transition } from 'react-transition-group';
import { ReactComponent as BackArrow } from '../../img/back-arrow.svg';
import colors from '../../styles/colors';

const DetailPageWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 1080px;
	height: 100%;
	margin: 20px auto 0px auto;
	transition: 1s;
	transform: translateX(${({ state }) => {
		switch (state) {
			case 'entering':
				return '0';
			case 'entered':
				return '0';
			case 'exiting':
				return '2000px';
			case 'exited':;
				return '2000px';
			default:
				return '0';
		}
	}});
	timing: cubic-bezier(0, 0.575, 0.565, 1.000);

	@media (max-width: 1300px) {
		width: 80%;
	}

`;

const DetailPageHeaderWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	height: 46px;
	margin: 10px 10px 20px 10px;
	background: linear-gradient(90deg, ${colors.purple1_70} 0%, ${colors.blue1_70} 100%);
	border-radius: 10px;
	box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.1);

	@media (max-width: 600px) {
		margin: 10px 0px 20px 25px;
	}
`;

const DetailPageBackButton = styled.button`
	position: fixed;
	margin: -14px 0 0 -100px;
	border: none;
	background: transparent;
	outline: none;
	border-radius: 100px;
	padding: 1em 1em .7em 1em;

	@media (max-width: 1050px) {
		margin: -14px 0 0 -70px;
	}

	@media (max-width: 675px) {
		margin: -14px 0 0 -43px;
	}

	@media (max-width: 400px) {
		margin: -14px 0 0 -39px;
	}

`;

const BackArrowStyled = styled(BackArrow)`
	opacity:.6;
	fill: white;

	&:hover {
		opacity: .7;
		fill: ${colors.yellow1};
	}

	&:active {
		opacity: 1;
		fill: ${colors.yellow1};
	}


`;

const DetailPageH1 = styled.h1`
	font-size: 32px;
	margin: 3px 0px 0px 20px;
	padding: 0px;
	color: ${colors.grey3};
`;

const DetailPageCardWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 10px 0 0 0;

	@media (max-width: 1300px) {
		flex-direction: column;
		margin: 10px auto 0 auto;
	}

`;

const DetailPageCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 520px;
	height: 320px;
	background: ${colors.grey5_70};
	border-radius: 10px;
	margin: 10px;
	border: none;
	overflow: hidden;
	box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.1);

	@media (max-width: 675px) {
		width: 100%;
		margin: 10px auto 10px auto;
		height: 550px;
	}

`;

const DetailPageCardH1 = styled.h1`
	font-size: 32px;
	margin: 12px 0px 0px 28px;
	padding: 0px;
	color: ${colors.grey3};

	@media (max-width: 675px) {
		font-size: 30px;
	}
`;

const DetailPageCardContentWrapper = styled.div`
	margin: 10px 28px 0 28px;
`;

const DetailPage = ({header, cardContent}) => {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		setTimeout(() => setAnimate(true), 15);
		console.log('useEffect in DetailPage triggered');
	}, []);
	const handleClick = (e) => {
		e.preventDefault();
		setAnimate(false);
		setTimeout(() => navigate('/'), 500);
	};

	const cards = () => {
		return (
			cardContent.map((obj) => {
				return (
					<DetailPageCard key={obj.heading}>
						<DetailPageCardH1>{obj.heading}</DetailPageCardH1>
						<DetailPageCardContentWrapper>
							{obj.content}
						</DetailPageCardContentWrapper>
					</DetailPageCard>
				);
			})
		);
	};

	console.log('animate', animate);

	return (
		<Transition in={animate} timeout={500}>
			{(state) => (
				// state change: exited -> entering -> entered -> exiting -> exited
				<DetailPageWrapper state={state}>
					<DetailPageBackButton onClick={handleClick}>
						<BackArrowStyled />
					</DetailPageBackButton>
					<DetailPageHeaderWrapper>
						<DetailPageH1>{header}</DetailPageH1>
					</DetailPageHeaderWrapper>
					<DetailPageCardWrapper>
						{cards()}
					</DetailPageCardWrapper>
				</DetailPageWrapper>
			)}
		</Transition>

	);
};

export default DetailPage;
