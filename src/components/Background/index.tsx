import React, { ReactNode } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import BackgroundDetailsDark from '../../assets/images/background-details-dark.png';
import BackgroundDetailsLight from '../../assets/images/background-details-light.png';
import IllustrationImg from '../../assets/images/illustration.png';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type BackgroundProps = {
	children: ReactNode;
	themeBackground: 'light' | 'dark';
}

export function Background({ children, themeBackground }: BackgroundProps) {
	const { primary, secondary } = theme.colors;

	if (themeBackground === 'light') {
		return (
			<View style={[styles.background, { backgroundColor: primary }]}>
				<ImageBackground
					source={BackgroundDetailsDark}
					style={styles.backgroundImage}
				>
					<Image source={IllustrationImg} style={styles.illustration} />
					<LinearGradient
						style={styles.linearGradient}
						colors={['transparent', primary, primary, primary]}
					>
						{children}
					</LinearGradient>
				</ImageBackground>
			</View>
		);
	} else {
		return (
			<View style={[styles.background, { backgroundColor: secondary }]}>
				<ImageBackground
					source={BackgroundDetailsLight}
					style={styles.backgroundImage}
				>
					{children}
				</ImageBackground>
			</View>
		);
	}


}
