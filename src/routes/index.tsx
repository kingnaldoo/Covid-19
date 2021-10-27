import React from 'react';

import { useAuth } from '../hooks/useAuth';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
	const auth = useAuth();
	return auth.user.id ? <AppRoutes /> : <AuthRoutes />;
}
