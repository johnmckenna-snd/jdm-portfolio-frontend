import React from 'react';
import DetailPage from '../detail-page/DetailPage.js';

const cardContent = [
	{
		heading: 'content creation',
		content: <p>card1</p>
	},
	{
		heading: 'system design',
		content: <p>card2</p>
	},
	{
		heading: 'system deployment',
		content: <p>card3</p>
	},
	{
		heading: 'networking',
		content: <p>card4</p>
	}
];

const SoundDesign = () => {
	return (
		<DetailPage header="sound design" cardContent={cardContent} />
	);
};

export default SoundDesign;
