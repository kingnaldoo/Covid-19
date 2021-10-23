import React from 'react';
import {  Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

type FormInputSubmitProps = {
	title: string;
	color: string;
}

export default function FormInputSubmit({ title, color }: FormInputSubmitProps) {
	const styles = StyleSheet.create({
		container: {
			backgroundColor: color,
			width: '100%',
			height: 47,
			borderRadius: 9,
			alignItems: 'center',
			justifyContent: 'center'
		},
		title: {
			color: '#fff',
			fontFamily: theme.fonts.title700,
			fontSize: 16
		}
	});

	return(
		<TouchableOpacity style={styles.container} activeOpacity={0.9}>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
}
