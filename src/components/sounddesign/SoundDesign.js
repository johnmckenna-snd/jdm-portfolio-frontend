import React from 'react';
import DetailPage from '../detail-page/DetailPage.js';
import ContentCreation from './ContentCreation';
import SystemDesign from './SystemDesign';
import SystemDeployment from './SystemDeployment';
import Networking from './Networking';

const cardContent = [
	{
		heading: 'content creation',
		content: <ContentCreation />
	},
	{
		heading: 'system design',
		content: <SystemDesign />
	},
	{
		heading: 'system deployment',
		content: <SystemDeployment />
	},
	{
		heading: 'networking',
		content: <Networking />
	}
];

const SoundDesign = () => {
	return (
		<DetailPage header="sound design" cardContent={cardContent} />
	);
};

export default SoundDesign;
