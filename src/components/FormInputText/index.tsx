import React, { ReactNode } from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';

type FormInputTextProps = {
	title: string;
	placeholder: string;
	icon?: ReactNode;
}

export default function FormInputText({ title, icon, placeholder }: FormInputTextProps) {
	return(
		<View>
			<Text style={styles.inputTitle}>{title}</Text>
			<View style={styles.inputSafeArea}>
				<TextInput style={[styles.textInput, !icon ? { width: '100%' } : { width: '85%' }]} placeholder={placeholder} />
				<View style={styles.infoIcon}>
					{icon}
				</View>
			</View>
		</View>
	);
}
