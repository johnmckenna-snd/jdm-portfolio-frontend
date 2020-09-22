import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const SoundDesignWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 1080px;
	height: 100%;
	margin: 20px auto 0px auto;
`;

const SoundDesignHeaderWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	height: 46px;
	margin: 10px 10px 20px 10px;
	background: linear-gradient(90deg, ${colors.purple1_70} 0%, ${colors.blue1_70} 100%);
	border-radius: 10px;
`;

const SoundDesignH1 = styled.h1`
	font-size: 32px;
	margin: 3px 0px 0px 20px;
	padding: 0px;
	color: ${colors.grey3};
`;

const SoundDesignCardWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 10px 0 0 0;
`;

const SoundDesignCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 520px;
	height: 320px;
	background: ${colors.grey2_70};
	border-radius: 10px;
	margin: 10px;
	border: none;

`;

const SoundDesign = () => {
	return (
		<SoundDesignWrapper>
			<SoundDesignHeaderWrapper>
				<SoundDesignH1>sound design</SoundDesignH1>
			</SoundDesignHeaderWrapper>
			<SoundDesignCardWrapper>
				<SoundDesignCard />
				<SoundDesignCard />
				<SoundDesignCard />
				<SoundDesignCard />
			</SoundDesignCardWrapper>
		</SoundDesignWrapper>
	);
};

export default SoundDesign;
