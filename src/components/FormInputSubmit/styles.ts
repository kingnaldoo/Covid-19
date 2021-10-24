import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
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
