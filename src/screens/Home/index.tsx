import { useNavigation } from "@react-navigation/native";
import React from "react";

import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Background } from "../../components/Background";
import { UserCard } from "../../components/UserCard";

import { styles } from "./styles";

export function Home() {
	const navigation = useNavigation();

	return (
		<Background themeBackground="dark">
			<ScrollView style={styles.container}>
				<View style={styles.list}>

					<UserCard
						username="Reinaldo da Silva"
						cpf="079.337.003-57"
						birthDate="20/09/2000"
						vaccineName="Coronavac"
						vaccineDose="1"
					/>
				</View>
			</ScrollView>
			<TouchableOpacity activeOpacity={0.85} style={styles.button} onPress={() => navigation.navigate('Register')}>
				<Text style={styles.buttonText}>+</Text>
			</TouchableOpacity>
		</Background>
	)
}
