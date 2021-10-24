import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingBottom: 20
	},
	content: {
		width: '85%',
		height: '80%',
		justifyContent: 'space-between',
	},
	topContentForm: {
		height: '60%'
	},
	title: {
		width: '90%',
		fontSize: 58,
		fontFamily: theme.fonts.title800,
		lineHeight: 65,
		color: theme.colors.secondary
	},
	fieldGroup: {
		height: '50%',
		justifyContent: 'space-between'
	},
	bottomContentForm: {
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
