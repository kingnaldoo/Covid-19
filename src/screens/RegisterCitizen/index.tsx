import React from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { Background } from "../../components/Background";
import FormInputSubmit from "../../components/FormInputSubmit";
import FormInputText from "../../components/FormInputText";

import { styles } from './styles';

export function RegisterCitizen() {
	return(
		<Background themeBackground="dark">
			<View style={styles.container}>
				<View>
					<FormInputText
						title="Nome completo"
						placeholder="Digite o nome completo"
						color="light"
					/>

					<FormInputText
						title="CPF"
						placeholder="000.000.000-00"
						color="light"
					/>

					<FormInputText
						title="Data de nascimento"
						placeholder="00/00/0000"
						color="light"
					/>

					<FormInputText
						title="Tipo de vacina"
						placeholder="Escolha o tipo de vacina"
						color="light"
					/>

					<FormInputText
						title="Dose da Vacina"
						placeholder="Primeira ou segunda dose?"
						color="light"
					/>
				</View>

				<FormInputSubmit title="Cadastrar cidadão" color="primary" />
			</View>
		</Background>
	)
}
