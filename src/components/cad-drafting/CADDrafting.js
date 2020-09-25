import React from 'react';
import DetailPage from '../detail-page/DetailPage.js';
import ThreeDModeling from './ThreeDModeling';
import SymbolLibraries from './SymbolLibraries';
import Collaboration from './Collaboration';
import SignalFlow from './SignalFlow';

const cardContent = [
	{
		heading: '3d modeling',
		content: <ThreeDModeling />
	},
	{
		heading: 'symbol libraries',
		content: <SymbolLibraries />
	},
	{
		heading: 'collaboration',
		content: <Collaboration />
	},
	{
		heading: 'signal flow',
		content: <SignalFlow />
	}
];

const CADDrafting = () => {
	return (
		<DetailPage header="cad drafting" cardContent={cardContent} />
	);
};

export default CADDrafting;
