import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Background } from '../../components/Background';
import { UserCard } from '../../components/UserCard';

import { CitizenResponseProps } from '../../contexts/citizenContext';

import { useCitizen } from '../../hooks/useCitizen';

import { styles } from './styles';

export function Home({ navigation }: any) {
	const citizen = useCitizen();

	const [citizensList, setCitizensList] = useState<CitizenResponseProps[]>([]);

	citizen.getCitizens()
		.then(data => {
			setCitizensList(data);
		})
		.catch(() => console.log('ocorreu um erro na requisição'));

	return (
		<Background themeBackground="dark">
			<ScrollView style={styles.container}>
				<View style={styles.list}>
					{citizensList.map(citizen => {
						return (
							<UserCard
								key={citizen.id}
								username={citizen.name}
								cpf={citizen.cpf}
								birthDate={citizen.birthDate}
								vaccineName={citizen.vaccineName}
								vaccineDose={citizen.vaccineDose}
							/>
						);
					})}
				</View>
			</ScrollView>

			<TouchableOpacity
				activeOpacity={0.85}
				style={styles.button}
				onPress={() => navigation.navigate('Register')}
			>
				<Text style={styles.buttonText}>+</Text>
			</TouchableOpacity>
		</Background>
	);
}
