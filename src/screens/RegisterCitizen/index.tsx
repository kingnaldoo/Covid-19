import React, { useState } from "react";
import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Background } from "../../components/Background";
import FormInputSubmit from "../../components/FormInputSubmit";
import FormInputText from "../../components/FormInputText";

import { registerCitizen } from "../../services/citizen";

import { styles } from './styles';

export function RegisterCitizen() {
	const navigation = useNavigation();

	const [name, setName] = useState('');
	const [cpf, setCpf] = useState('');
	const [birthDate, setBirthDate] = useState('');
	const [vaccineName, setVaccineName] = useState('');
	const [vaccineDose, setVaccineDose] = useState('');

	registerCitizen({ name, cpf, birthDate, vaccineName, vaccineDose })
		.then(() => {
			{/* @ts-ignore */ }
			navigation.navigate("Home")
		})
		.catch(() => {
			console.log('nao foi possivel cadastrar cidadao')
		})

	return (
		<Background themeBackground="dark">
			<View style={styles.container}>
				<View>
					<FormInputText
						title="Nome completo"
						placeholder="Digite o nome completo"
						color="light"
						onChangeText={(text) => setName(text)}
					/>

					<FormInputText
						title="CPF"
						placeholder="000.000.000-00"
						color="light"
						onChangeText={(text) => setCpf(text)}
					/>

					<FormInputText
						title="Data de nascimento"
						placeholder="00/00/0000"
						color="light"
						onChangeText={(text) => setBirthDate(text)}
					/>

					<FormInputText
						title="Tipo de vacina"
						placeholder="Escolha o tipo de vacina"
						color="light"
						onChangeText={(text) => setVaccineName(text)}
					/>

					<FormInputText
						title="Dose da Vacina"
						placeholder="Primeira ou segunda dose?"
						color="light"
						onChangeText={(text) => setVaccineDose(text)}
					/>
				</View>

				<FormInputSubmit
					title="Cadastrar cidadão"
					color="primary"
					onPress={() => registerCitizen}
				/>
			</View>
		</Background>
	)
}
