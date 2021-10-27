import React from 'react';
import { CitizenContextProvider } from '../contexts/citizenContext';

import { useAuth } from '../hooks/useAuth';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
	const auth = useAuth();
	return auth.user.id ?
		<CitizenContextProvider>
			<AppRoutes />
		</CitizenContextProvider> :
		<AuthRoutes />;
}
