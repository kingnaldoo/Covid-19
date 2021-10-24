import React, { ReactNode } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import BackgroundImg from '../../assets/images/backgroundSecondaryColor.png';
import IllustrationImg from '../../assets/images/illustration.png';

type BackgroundProps = {
	children: ReactNode;
}

export function Background({ children }: BackgroundProps) {
	const { primary } = theme.colors;

	return (
		<View style={styles.container}>
			<ImageBackground
				source={BackgroundImg}
				style={styles.backgroundImage}
			>
				<Image source={IllustrationImg} style={styles.illustration}/>
				<LinearGradient
					style={styles.linearGradient}
					colors={['transparent', primary, primary, primary]}
				>
					{children}
				</LinearGradient>
			</ImageBackground>
		</View>
	);
}
