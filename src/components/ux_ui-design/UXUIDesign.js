import React from 'react';
import DetailPage from '../detail-page/DetailPage.js';
import DetailCardImage from '../detail-page/DetailCardImage';
import DetailCardNoImage from '../detail-page/DetailCardNoImage';

import sndwrksFlowLogo from '../../img/sndwrks_flow logo@72x@2x.png';
import rfDatabase from '../../img/rf_database@2x.png';
import cakePop from '../../img/cake_pop@72x@2x.png';

const cardContent = [
	{
		heading: 'responsive ui design',
		content: <DetailCardNoImage text="Responsive Design can make or break the user experience. I’ve designed two websites (including this one) with fully responsive designs. Additionally, I’ve designed UI for two responsive Filemaker databases that are currently used on Broadway (Ain’t Too Proud, Diana, MJ the Musical, True West, and more). I am comfortable using Illustrator and XD for wire-framing and prototyping." />
	},
	{
		heading: 'branding',
		content: <DetailCardImage image={sndwrksFlowLogo} text="Good branding can make growing a company easy. I have branded three entities: CakePop - The Podcast, a dark startup (references available upon request), and sndwrks LLC." />
	},
	{
		heading: 'complete ux',
		content: <DetailCardImage image={rfDatabase} text="I’ve developed digital products for three years now. Most of these are used in the theater industry from the start of planning, all the way through show run." />
	},
	{
		heading: 'graphic design',
		content: <DetailCardImage image={cakePop} text="All of my designs, I’ve done some form of graphic design for them. Although I have no formal graphic design training, I am continuously curious about learning more." />
	}
];

const UXUIDesign = () => {
	return (
		<DetailPage header="ux/ui design" cardContent={cardContent} />
	);
};

export default UXUIDesign;
