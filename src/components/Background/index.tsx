import React, { ReactNode } from 'react';
import { LinearGradient } from 'react-native-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type BackgroundProps = {
	children: ReactNode;
}

export function Background({ children }: BackgroundProps) {
	const { primary } = theme.colors;

	return (
		<LinearGradient
			style={styles.linearGradient}
			colors={['#ffffff', '#ff0000']}
		>
			{children}
		</LinearGradient>
	);
}
