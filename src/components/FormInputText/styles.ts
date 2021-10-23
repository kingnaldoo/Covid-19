import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	inputTitle: {
		color: theme.colors.secondary,
		fontSize: 17,
		fontFamily: theme.fonts.title700,
		marginBottom: 6,
	},
	inputSafeArea: {
		width: '100%',
		height: '50%',
		borderRadius: 9,
		borderWidth: 1,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,

		elevation: 11,
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: '3%',
		paddingHorizontal: '4%'
	},
	textInput: {
		width: '85%',
		fontFamily: theme.fonts.text400
	},
	infoIcon: {
		width: '15%',
		alignItems: 'center',
	},
});
