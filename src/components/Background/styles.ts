import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.primary
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
