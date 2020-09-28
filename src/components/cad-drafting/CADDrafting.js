import React from 'react';
import DetailPage from '../detail-page/DetailPage.js';
import DetailCardImage from '../detail-page/DetailCardImage';
import DetailCardNoImage from '../detail-page/DetailCardNoImage';

import threeDModelingScreenshot from '../../img/3dmodeling_screenshot@2x.png';
import symbolLibraryScreenshot from '../../img/symbol-library-screenshot@2x.png';
import signalFlowScreenshot from '../../img/flow_screenshot@2x.png';

const cardContent = [
	{
		heading: '3d modeling',
		content: <DetailCardImage image={threeDModelingScreenshot} text="3D Workflows increase drawing accuracy, speed, and legibility. I have been drafting in 3D and doing my own modeling for three years." />
	},
	{
		heading: 'symbol libraries',
		content: <DetailCardImage image={symbolLibraryScreenshot} text="Symbol Libraries exist to make the drafters life easier. I have developed multiple libraries in Vectorworks and Omnigraffle that are used by multiple industry professionals." />
	},
	{
		heading: 'collaboration',
		content: <DetailCardNoImage text="All projects require collaboration. I understand that my job is not done once I export a plate. I am comfortable working with many different departments and disciplines to make sure that what gets drawn is what gets built." />
	},
	{
		heading: 'signal flow',
		content: <DetailCardImage image={signalFlowScreenshot} text="Signal flows help designs be built, tested, and maintained easier. I draw signal flows for nearly every show I’m on. I have experience drawing very large-scale shows." />
	}
];

const CADDrafting = () => {
	return (
		<DetailPage header="cad drafting" cardContent={cardContent} />
	);
};

export default CADDrafting;
