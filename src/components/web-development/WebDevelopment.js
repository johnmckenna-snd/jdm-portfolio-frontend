import React from 'react';
import DetailPage from '../detail-page/DetailPage.js';
import ResponsiveUIDesign from './ResponsiveUIDesign';
import Branding from './Branding';
import CompleteUX from './CompleteUX';
import GraphicDesign from './GraphicDesign';

const cardContent = [
	{
		heading: 'responsive ui design',
		content: <ResponsiveUIDesign />
	},
	{
		heading: 'branding',
		content: <Branding />
	},
	{
		heading: 'complete ux',
		content: <CompleteUX />
	},
	{
		heading: 'graphic design',
		content: <GraphicDesign />
	}
];

const WebDevelopment = () => {
	return (
		<DetailPage header="ux/ui design" cardContent={cardContent} />
	);
};

export default WebDevelopment;
