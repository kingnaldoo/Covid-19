import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { Dimensions } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: Dimensions.get('window').height,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: theme.colors.primary,
		paddingBottom: 20
	},
	content: {
		height: '80%',
		width: '85%',
		justifyContent: 'space-between'
	},
	topContent: {
		height: '50%',
		justifyContent: 'space-between'
	},
	title: {
		width: '90%',
		fontSize: 58,
		fontFamily: theme.fonts.title800,
		lineHeight: 65,
		color: theme.colors.secondary,
		marginBottom: 21
	},
	fieldGroup: {
		height: '50%',
		justifyContent: 'space-between'
	},
	bottomContent: {
		height: '15%',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	signUpText: {
		fontSize: 17,
		fontFamily: theme.fonts.text400
	},
	signUpLink: {
		fontFamily: theme.fonts.title700
	}
});
