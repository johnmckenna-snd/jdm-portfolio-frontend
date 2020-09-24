import React from 'react';
import Home from '../home/Home';
import SoundDesign from '../sounddesign/SoundDesign';
import UXUIDesign from '../ux_ui-design/UXUIDesign';

const routes = {
	'/': () => <Home />,
	'/sound-design': () => <SoundDesign />,
	'/ux_ui-design': () => <UXUIDesign />
};

export default routes;
