import React from "react";
import { View, ScrollView } from "react-native";
import { Background } from "../../components/Background";
import { UserCard } from "../../components/UserCard";

import { styles } from "./styles";

export function Home() {
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
					<UserCard
						username="Reinaldo da Silva"
						cpf="079.337.003-57"
						birthDate="20/09/2000"
						vaccineName="Coronavac"
						vaccineDose="1"
					/>
					<UserCard
						username="Reinaldo da Silva"
						cpf="079.337.003-57"
						birthDate="20/09/2000"
						vaccineName="Coronavac"
						vaccineDose="1"
					/>
					<UserCard
						username="Reinaldo da Silva"
						cpf="079.337.003-57"
						birthDate="20/09/2000"
						vaccineName="Coronavac"
						vaccineDose="1"
					/>
					<UserCard
						username="Reinaldo da Silva"
						cpf="079.337.003-57"
						birthDate="20/09/2000"
						vaccineName="Coronavac"
						vaccineDose="1"
					/>
					<UserCard
						username="Reinaldo da Silva"
						cpf="079.337.003-57"
						birthDate="20/09/2000"
						vaccineName="Coronavac"
						vaccineDose="1"
					/>
					<UserCard
						username="Reinaldo da Silva"
						cpf="079.337.003-57"
						birthDate="20/09/2000"
						vaccineName="Coronavac"
						vaccineDose="1"
					/>
					<UserCard
						username="Reinaldo da Silva"
						cpf="079.337.003-57"
						birthDate="20/09/2000"
						vaccineName="Coronavac"
						vaccineDose="1"
					/>
				</View>
			</ScrollView>
		</Background>
	)
}
