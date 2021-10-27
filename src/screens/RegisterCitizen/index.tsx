import React, { useState } from "react";
import { View } from "react-native";

import { Background } from "../../components/Background";
import FormInputSubmit from "../../components/FormInputSubmit";
import FormInputText from "../../components/FormInputText";


import { styles } from './styles';
import { validateBirthDate, validateCpf } from "../../utils/validation";
import { useCitizen } from "../../hooks/useCitizen";

export function RegisterCitizen({navigation}: any) {
	const citizen = useCitizen();

	const [name, setName] = useState('');
	const [cpf, setCpf] = useState('');
	const [birthDate, setBirthDate] = useState('');
	const [vaccineName, setVaccineName] = useState('');
	const [vaccineDose, setVaccineDose] = useState('');

	function handleRegisterCitizen() {
		citizen.registerCitizen({ name, cpf, birthDate, vaccineName, vaccineDose })
			.then(() => {
				navigation.navigate("Home")
			})
			.catch(() => {
				console.log('nao foi possivel cadastrar cidadao')
			})
	}

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
						onChangeText={(text) => setCpf(validateCpf(text))}
					/>

					<FormInputText
						title="Data de nascimento"
						placeholder="00/00/0000"
						color="light"
						onChangeText={(text) => setBirthDate(validateBirthDate(text))}
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
					onPress={() => handleRegisterCitizen()}
				/>
			</View>
		</Background>
	)
}
