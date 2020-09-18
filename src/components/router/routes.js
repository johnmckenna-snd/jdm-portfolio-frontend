import React from 'react';
import Home from '../home/Home';
import SoundDesign from '../sounddesign/SoundDesign';

const routes = {
	'/': () => <Home />,
	'/sound-design': () => <SoundDesign />
};

export default routes;
