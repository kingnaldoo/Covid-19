import React from 'react';
import { Dimensions, StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { RegisterCitizen } from '../screens/RegisterCitizen';

import { useAuth } from '../hooks/useAuth';

import Icon from 'react-native-vector-icons/Feather';
import ProfileImg from '../assets/icons/profile.svg';

import { getFirstName } from '../utils/name';

import { theme } from '../global/styles/theme';

export function AppRoutes({ navigation }: any) {
	const { Navigator, Screen } = createStackNavigator();
	const auth = useAuth();

	Icon.loadFont();

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
							return <ProfileImg
								style={{
									height: 38,
									width: 38,
									marginLeft: Dimensions.get('window').width * 0.075
								}}
							/>;
						},
						headerRight: () => {
							return <Icon
								name="log-out"
								color="#fff"
								size={26}
								style={{
									marginRight: Dimensions.get('window').width * 0.075
								}}
								onPress={() => auth.handleSignOut()}
							/>;
						},
					}}
				/>

				<Screen
					name='Register'
					component={RegisterCitizen}
					options={{
						title: 'Cadastrar cidadão',
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
							/>;
						},
					}}
				/>
			</Navigator>
		</>
	);
}
