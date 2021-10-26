import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { AccessRoutes } from './access.routes';

export function Routes() {
	return (
		<NavigationContainer >
			{true ? <AccessRoutes /> : <AppRoutes/>}
		</NavigationContainer>

	);
}
