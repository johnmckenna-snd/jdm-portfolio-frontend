import React from 'react';
import DetailPage from '../detail-page/DetailPage.js';
import ReactHooks from './ReactHooks';
import MongoDB from './MongoDB';
import Node from './Node';
import AWS from './AWS';

const cardContent = [
	{
		heading: 'react hooks',
		content: <ReactHooks />
	},
	{
		heading: 'mongodb',
		content: <MongoDB />
	},
	{
		heading: 'node',
		content: <Node />
	},
	{
		heading: 'aws',
		content: <AWS />
	}
];

const WebDevelopment = () => {
	return (
		<DetailPage header="web development" cardContent={cardContent} />
	);
};

export default WebDevelopment;
