import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import {
	Nunito_400Regular,
	Nunito_600SemiBold,
	Nunito_700Bold,
	Nunito_800ExtraBold
} from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { UserContextProvider } from './src/contexts/authContext';

import { Routes } from './src/routes';

export default function App() {
	const [fontsLoaded] = useFonts({
		Nunito_400Regular,
		Nunito_600SemiBold,
		Nunito_700Bold,
		Nunito_800ExtraBold
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<NavigationContainer>
			<UserContextProvider>
				<Routes />
			</UserContextProvider>
		</NavigationContainer>
	);
}
