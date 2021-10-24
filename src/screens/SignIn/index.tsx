import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FormInputSubmit from '../../components/FormInputSubmit';
import FormInputText from '../../components/FormInputText';
import { theme } from '../../global/styles/theme';

Icon.loadFont();

import { styles } from './styles';

export function SignIn() {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.topContentForm}>
					<Text style={styles.title}>Fazer Login</Text>

					<View style={styles.fieldGroup}>
						<FormInputText
							title="E-mail"
							placeholder="meu_e-mail@gmail.com"
							icon={<Icon name="info" size={25} color="#1B2735" />}
						/>

						<FormInputText
							title="Senha"
							placeholder="***************"
							icon={<Icon name="eye" size={25} color="#1B2735" />}
						/>
					</View>
				</View>

				<View style={styles.bottomContentForm}>
					<FormInputSubmit title="Entrar" color={theme.colors.secondary} />

					<Text style={styles.signUpText}>Não possui cadastro? <Text style={styles.signUpLink}>Clique aqui</Text></Text>
				</View>
			</View>
		</View>
	);
}
