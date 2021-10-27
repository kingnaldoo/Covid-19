import React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

import { theme } from '../global/styles/theme';

export function AuthRoutes() {
	const { Navigator, Screen } = createStackNavigator();

	return (
		<>
			<StatusBar
				barStyle="dark-content"
				backgroundColor={theme.colors.primary}
				translucent
			/>

			<Navigator initialRouteName='SignIn' screenOptions={{
				headerShown: false
			}}>
				<Screen name='SignIn' component={SignIn} />
				<Screen name='SignUp' component={SignUp} />
			</Navigator>
		</>
	);
}
