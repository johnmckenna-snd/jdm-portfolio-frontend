import React from 'react';
import Home from '../home/Home';
import SoundDesign from '../sounddesign/SoundDesign';
import UXUIDesign from '../ux_ui-design/UXUIDesign';
import WebDevelopment from '../web-development/WebDevelopment';

const routes = {
	'/': () => <Home />,
	'/sound-design': () => <SoundDesign />,
	'/ux_ui-design': () => <UXUIDesign />,
	'/web-development': () => <WebDevelopment />
};

export default routes;
