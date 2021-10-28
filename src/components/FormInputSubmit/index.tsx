import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';

interface FormInputSubmitProps extends TouchableOpacityProps {
	title: string;
	color: 'primary' | 'secondary';
}

export default function FormInputSubmit({ title, color, ...rest }: FormInputSubmitProps) {
	return (
		<TouchableOpacity
			style={[
				styles.container,
				color === 'primary' ? { backgroundColor: theme.colors.emphasis } : { backgroundColor: theme.colors.secondary }
			]}
			activeOpacity={0.9}
			{...rest}
		>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
}
