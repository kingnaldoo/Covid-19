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
		height: '90%'
	},
	title: {
		width: '90%',
		fontSize: 58,
		fontFamily: theme.fonts.title800,
		lineHeight: 65,
		color: theme.colors.secondary
	},
	fieldGroup: {
		height: '48%',
		justifyContent: 'space-between'
	}
});
