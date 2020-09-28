import React from 'react';
import DetailPage from '../detail-page/DetailPage.js';
import DetailCardImage from '../detail-page/DetailCardImage.js';
import DetailCardNoImage from '../detail-page/DetailCardNoImage';

import mappSection from '../../img/truewest_mapp_section@2x.png';
import singStreetRacks from '../../img/sing-street-racks@2x.png';
import networkingScreenshot from '../../img/networking_screenshot@2x.png';

const cardContent = [
	{
		heading: 'content creation',
		content: <DetailCardNoImage text="Content, especially sound, can have an outsize impact on how well the story is received. I have made music and sound effects for shows I have designed and assisted on. I also have experience programming surround effects like panning and moving sounds. Audio samples available upon request. I am also a USA 829 Sound Designer." />
	},
	{
		heading: 'system design',
		content: <DetailCardImage image={mappSection} text="System Design has an enormous impact on how easy it can be to translate a design to listeners. I have designed sound and communication systems for shows on Broadway and across the country." />
	},
	{
		heading: 'system deployment',
		content: <DetailCardImage image={singStreetRacks} text="Installing systems can make or break their functionality. I am experienced in deploying systems for concerts, theater, and events. I am a IATSE Union Member." />
	},
	{
		heading: 'networking',
		content: <DetailCardImage image={networkingScreenshot} text="Networking is the backbone of modern audio systems. I have designed, configured, and deployed extensive audio/control networks using fiber and copper, with VLANs, trunking, switch stacks, and WAPs." />
	}
];

const SoundDesign = () => {
	return (
		<DetailPage header="sound design" cardContent={cardContent} />
	);
};

export default SoundDesign;
