import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Background } from '../../components/Background';
import FormInputSubmit from '../../components/FormInputSubmit';
import FormInputText from '../../components/FormInputText';

import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/useAuth';

import { styles } from './styles';

export function SignIn({ navigation }: any) {
	const auth = useAuth();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	Icon.loadFont();

	function handleSignIn() {
		auth.handleSignIn({ email, password })
			.then(async(authData) => {
				await AsyncStorage.setItem('AUTH_DATA', JSON.stringify(authData));
				auth.setUser(authData.user);
				auth.setToken(authData.token);
			})
			.catch(() => {
				console.log('ocorreu um erro');
			});
	}

	return (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			<Background themeBackground='light'>
				<View style={styles.content}>
					<View style={styles.topContentForm}>
						<Text style={styles.title}>Fazer Login</Text>

						<View style={styles.fieldGroup}>
							<FormInputText
								title="E-mail"
								placeholder="meu_e-mail@gmail.com"
								color="dark"
								icon={<Icon name="info" size={25} color="#1B2735" />}
								onChangeText={(text) => setEmail(text)}
							/>

							<FormInputText
								title="Senha"
								placeholder="***************"
								color="dark"
								icon={<Icon name="eye" size={25} color="#1B2735" />}
								onChangeText={(text) => setPassword(text)}
							/>
						</View>
					</View>

					<View style={styles.bottomContentForm}>
						<FormInputSubmit title="Entrar" color="secondary" onPress={handleSignIn} />

						<Text style={styles.signUpText}>Não possui cadastro? <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>Clique aqui</Text></Text>
					</View>
				</View>
			</Background>
		</KeyboardAvoidingView>
	);
}
