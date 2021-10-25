import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { theme } from '../global/styles/theme';
import { Dimensions, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import ProfileImg from '../assets/images/profile.png';
import { RegisterCitizen } from '../screens/RegisterCitizen';
import { useNavigation } from '@react-navigation/native';

const { Navigator, Screen } = createStackNavigator();

Icon.loadFont();

export function AppRoutes() {
	const navigation = useNavigation();
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
						title: 'Bem vindo, Fulano',
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
									marginLeft: Dimensions.get('window').width*0.075
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
