import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Background } from '../../components/Background';
import FormInputSubmit from '../../components/FormInputSubmit';
import FormInputText from '../../components/FormInputText';

Icon.loadFont();

import { styles } from './styles';

export function SignUp() {
	const navigation = useNavigation();

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

					{/* @ts-ignore */}
					<FormInputSubmit title="Concluir" color="secondary" onPress={() => navigation.navigate('SignIn')}
					/>
				</KeyboardAvoidingView>
			</View>
		</Background>
	);
}
