import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		maxHeight: '90%',
	},
	list: {
		width: '100%',
		height: 'auto',
		paddingHorizontal: '7.5%',
		alignSelf: 'center'
	},
	button: {
		position: 'absolute',
		left: '80%',
		top: '78%',
		width: 56,
		height: 56,
		backgroundColor: theme.colors.emphasis,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		fontSize: 30,
		color: '#FFF'
	}
})
