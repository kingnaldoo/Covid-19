import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	userCard: {
		width: '100%',
		height: 95,
		backgroundColor: '#fff',
		borderRadius: 15,
		padding: 10,
		flexDirection: 'row',
		marginVertical: 13
	},
	userInfo: {
		justifyContent: 'space-between',
		width: '75%',
		height: '100%'
	},
	username: {
		fontFamily: theme.fonts.title600,
		fontSize: 18,
		color: theme.colors.secondary
	},
	cpf: {
		fontFamily: theme.fonts.text400,
		fontSize: 14
	},
	birthDate: {
		fontFamily: theme.fonts.text400,
		fontSize: 14
	},
	vaccineInfo: {
		width: '25%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	vaccineName: {
		fontFamily: theme.fonts.title600,
		fontSize: 13,
		color: theme.colors.emphasis
	},
	vaccineDose: {
		fontFamily: theme.fonts.text400,
		fontSize: 11,
		color: theme.colors.secondary
	}
})
