import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	background: {
		flex: 1,
	},
	backgroundImage: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		position: 'absolute'
	},
	illustration: {
		position: 'absolute',
		alignSelf: 'center',
		top: '6%'
	},
	linearGradient: {
		flex: 1
	}
});
