import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BackArrow } from '../../img/back-arrow.svg';
import colors from '../../styles/colors';

const DetailPageWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 1080px;
	height: 100%;
	margin: 20px auto 0px auto;
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
`;

const DetailPageBackButton = styled.button`
	position: absolute;
	margin: -14px 0 0 -100px;
	border: none;
	background: transparent;
	outline: none;
	border-radius: 100px;
	padding: 1em 1em .7em 1em;

`;

const BackArrowStyled = styled(BackArrow)`
	opacity:.6;
	fill: white;

	&:hover {
		opacity: 1;
	}

	&:active {
		fill: ${colors.purple1_70};
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
`;

const DetailPageCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 520px;
	height: 320px;
	background: ${colors.grey2_70};
	border-radius: 10px;
	margin: 10px;
	border: none;

`;

const DetailPage = ({header, cards}) => {
	return (
		<DetailPageWrapper>
			<DetailPageBackButton>
				<BackArrowStyled />
			</DetailPageBackButton>
			<DetailPageHeaderWrapper>
				<DetailPageH1>{header}</DetailPageH1>
			</DetailPageHeaderWrapper>
			<DetailPageCardWrapper>
				<DetailPageCard />
				<DetailPageCard />
				<DetailPageCard />
				<DetailPageCard />
			</DetailPageCardWrapper>
		</DetailPageWrapper>
	);
};

export default DetailPage;
