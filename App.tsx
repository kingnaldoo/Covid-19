import React from 'react';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { Nunito_400Regular, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
	const [fontsLoaded] = useFonts({
		Nunito_400Regular,
		Nunito_700Bold,
		Nunito_800ExtraBold
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
			/>
			<Routes />
		</>
	);
}
