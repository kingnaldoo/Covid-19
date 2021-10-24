import React from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FormInputSubmit from '../../components/FormInputSubmit';
import FormInputText from '../../components/FormInputText';
import { theme } from '../../global/styles/theme';

Icon.loadFont();

import { styles } from './styles';

export function SignUp() {
	return (
		<View style={styles.container}>
			<KeyboardAvoidingView behavior='position' style={styles.content}>
				<View style={styles.topContentForm}>
					<Text style={styles.title}>Fazer Cadastro</Text>

					<View style={styles.fieldGroup}>
						<FormInputText
							title="Nome completo"
							placeholder="Digite o nome completo"
						/>

						<FormInputText
							title="Número de telefone"
							placeholder="(XX) 00000-0000"
						/>

						<FormInputText
							title="E-mail"
							placeholder="meu_e-mail@gmail.com"
						/>

						<FormInputText
							title="Senha"
							placeholder="***************"
						/>
					</View>
				</View>

				<FormInputSubmit
					title="Concluir"
					color={theme.colors.secondary}
				/>
			</KeyboardAvoidingView>
		</View>
	);
}
