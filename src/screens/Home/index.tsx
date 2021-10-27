import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Background } from "../../components/Background";
import { UserCard } from "../../components/UserCard";

import { styles } from "./styles";
import { useCitizen } from "../../hooks/useCitizen";
import { CitizenResponseProps } from "../../contexts/citizenContext";

export function Home() {
	const citizen = useCitizen()
	const navigation = useNavigation();

	const [citizensList, setCitizensList] = useState<CitizenResponseProps[]>([])

	citizen.getCitizens()
		.then(data => {
			setCitizensList(data)
		})
		.catch(() => console.log('ocorreu um erro na requisição'))

	return (
		<Background themeBackground="dark">
			<ScrollView style={styles.container}>
				<View style={styles.list}>
					{citizensList.map(citizen => {
						return(
							<UserCard
								key={citizen.id}
								username={citizen.name}
								cpf={citizen.cpf}
								birthDate={citizen.birthDate}
								vaccineName={citizen.vaccineName}
								vaccineDose={citizen.vaccineDose}
							/>
						)
					})}
				</View>
			</ScrollView>

			<TouchableOpacity
				activeOpacity={0.85}
				style={styles.button}
				// @ts-ignore
				onPress={() => navigation.navigate("Register")}
			>
				<Text style={styles.buttonText}>+</Text>
			</TouchableOpacity>
		</Background>
	)
}
