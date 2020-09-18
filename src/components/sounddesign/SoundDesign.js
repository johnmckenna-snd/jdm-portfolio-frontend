import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const SoundDesignWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 750px;
	height: 300px;
	margin: 160px auto 0px auto;
`;

const SoundDesignCard = styled.button`
	display: flex;
	flex-direction: column;
	width: 350px;
	height: 130px;
	background: linear-gradient(90deg, ${colors.purple1_70} 0%, ${colors.blue1_70} 100%);
	border-radius: 10px;
	margin: 10px;
	border: none;

	&:hover {
		background: ${colors.purple1_70};
	}
`;

const SoundDesign = () => {
	return (
		<SoundDesignWrapper>
			<h1>Sound Design</h1>
			<SoundDesignCard />
			<SoundDesignCard />
			<SoundDesignCard />
			<SoundDesignCard />
		</SoundDesignWrapper>
	);
};

export default SoundDesign;
