import React from 'react';
import { useRoutes } from 'hookrouter';
import styled from 'styled-components';
import routes from './routes';
import E404 from '../404/404';

const RouterWrapper = styled.div`
	margin: 0 auto 40px auto;
`;

const Router = () => {
	const routeResult = useRoutes(routes);
	return (
		<RouterWrapper>
			{routeResult || <E404 />}
		</RouterWrapper>
	);
};

export default Router;
