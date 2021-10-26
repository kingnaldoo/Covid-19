import React, { ReactNode } from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

interface FormInputTextProps extends TextInputProps {
	title: string;
	placeholder: string;
	color: 'light' | 'dark';
	icon?: ReactNode;
}

export default function FormInputText({ title, icon, placeholder, color, ...rest }: FormInputTextProps) {
	const {secondary} = theme.colors;

	return(
		<View>
			<Text style={[styles.inputTitle, color === 'light' ? {color: '#fff'} : {color: secondary}]}>{title}</Text>
			<View style={styles.inputSafeArea}>
				<TextInput
					style={[styles.textInput, !icon ? { width: '100%' } : { width: '85%' }]}
					placeholder={placeholder}
					{...rest}
				/>
				<View style={styles.infoIcon}>
					{icon}
				</View>
			</View>
		</View>
	);
}
