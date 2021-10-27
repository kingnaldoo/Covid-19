import React from 'react';
import { Dimensions, Image, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Home } from '../screens/Home';
import { RegisterCitizen } from '../screens/RegisterCitizen';

import { User } from '../contexts/authContext';

import { useAuth } from '../hooks/useAuth';

import Icon from 'react-native-vector-icons/Feather';
import ProfileImg from '../assets/images/profile.png';

import { theme } from '../global/styles/theme';
import { getFirstName } from '../utils/name';


export function AppRoutes() {
	const { Navigator, Screen } = createStackNavigator();
	const navigation = useNavigation();
	const auth = useAuth();

	Icon.loadFont();

	async function handleSignOut() {
		await AsyncStorage.removeItem("AUTH_DATA");
		auth.setUser({} as User);
	}

	return (
		<>
			<StatusBar
				barStyle="light-content"
				backgroundColor={theme.colors.secondary}
				translucent
			/>

			<Navigator initialRouteName='Home'>
				<Screen
					name='Home'
					component={Home}
					options={{
						title: `Bem vindo, ${getFirstName(auth.user.name)}`,
						headerStyle: {
							backgroundColor: theme.colors.secondary,
						},
						headerTitleStyle: {
							color: '#fff',
							fontFamily: theme.fonts.title800,
							fontSize: 14
						},
						headerTitleAlign: 'center',
						headerLeft: () => {
							return <Image
								source={ProfileImg}
								style={{
									height: 38,
									width: 38,
									marginLeft: Dimensions.get('window').width * 0.075
								}}
							/>
						},
						headerRight: () => {
							return <Icon
								name="log-out"
								color="#fff"
								size={26}
								style={{
									marginRight: Dimensions.get('window').width * 0.075
								}}
								onPress={() => handleSignOut()}
							/>
						},
					}}
				/>

				<Screen
					name='Register'
					component={RegisterCitizen}
					options={{
						title: "Cadastrar cidadão",
						headerStyle: {
							backgroundColor: theme.colors.secondary,
						},
						headerTitleStyle: {
							color: '#fff',
							fontFamily: theme.fonts.title800,
							fontSize: 14
						},
						headerTitleAlign: 'center',
						headerLeft: () => {
							return <Icon
								name="chevron-left"
								color="#fff"
								size={26}
								style={{
									marginLeft: Dimensions.get('window').width * 0.075
								}}
								onPress={() => navigation.goBack()}
							/>
						},
					}}
				/>
			</Navigator>
		</>
	);
}
