import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';

const Router = () => {
	const routeResult = useRoutes(routes);
	return (
		routeResult
	);
};

export default Router;
