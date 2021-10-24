import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { StatusBar } from 'react-native';
import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function AccessRoutes() {
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
