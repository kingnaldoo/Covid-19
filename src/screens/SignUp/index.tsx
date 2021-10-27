import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import FormInputSubmit from '../../components/FormInputSubmit';
import FormInputText from '../../components/FormInputText';

import Icon from 'react-native-vector-icons/Feather';

import { styles } from './styles';
import { useAuth } from '../../hooks/useAuth';

export function SignUp() {
	const auth = useAuth();
	const navigation = useNavigation();

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	Icon.loadFont();

	async function handleSignUp() {
		auth.handleSignUp({ name, email, password })
			.then(() => {
				{/* @ts-ignore */ }
				navigation.navigate('SignIn')
			})
			.catch(() => {
				console.log('nao foi possivel fazer o cadastro')
			})
	}

	return (
		<Background themeBackground="light">
			<View style={styles.container}>
				<KeyboardAvoidingView behavior='position' style={styles.content}>
					<View style={styles.topContentForm}>
						<Text style={styles.title}>Fazer Cadastro</Text>

						<View style={styles.fieldGroup}>
							<FormInputText
								title="Nome completo"
								placeholder="Digite o nome completo"
								color="dark"
								onChangeText={(text) => setName(text)}
							/>

							<FormInputText
								title="E-mail"
								placeholder="meu_e-mail@gmail.com"
								color="dark"
								onChangeText={(text) => setEmail(text)}
							/>

							<FormInputText
								title="Senha"
								placeholder="***************"
								color="dark"
								onChangeText={(text) => setPassword(text)}
							/>
						</View>
					</View>

					<FormInputSubmit
						title="Concluir"
						color="secondary"
						onPress={handleSignUp}
					/>
				</KeyboardAvoidingView>
			</View>
		</Background>
	);
}
