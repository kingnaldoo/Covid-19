/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Background } from '../../components/Background';
import FormInputSubmit from '../../components/FormInputSubmit';
import FormInputText from '../../components/FormInputText';

Icon.loadFont();

import { styles } from './styles';

export function SignIn() {
	const navigation = useNavigation();

	return (
		<Background themeBackground="light">
			<View style={styles.container}>
				<View style={styles.content}>
					<View style={styles.topContentForm}>
						<Text style={styles.title}>Fazer Login</Text>

						<View style={styles.fieldGroup}>
							<FormInputText
								title="E-mail"
								placeholder="meu_e-mail@gmail.com"
								color="dark"
								icon={<Icon name="info" size={25} color="#1B2735" />}
							/>

							<FormInputText
								title="Senha"
								placeholder="***************"
								color="dark"
								icon={<Icon name="eye" size={25} color="#1B2735" />}
							/>
						</View>
					</View>

					<View style={styles.bottomContentForm}>
						<FormInputSubmit title="Entrar" color="secondary"/>

						{/*@ts-ignore */}
						<Text style={styles.signUpText}>Não possui cadastro? <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>Clique aqui</Text></Text>
					</View>
				</View>
			</View>
		</Background>
	);
}
