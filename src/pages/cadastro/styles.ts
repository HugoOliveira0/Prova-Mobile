import { Dimensions, StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f3f7ff',
	},
	boxTop: {
		height: Dimensions.get('window').height / 4,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingBottom: 18,
	},
	boxMid: {
		height: Dimensions.get('window').height / 2,
		width: '92%',
		paddingHorizontal: 30,
		paddingTop: 16,
		paddingBottom: 22,
		backgroundColor: '#ffffff',
		borderRadius: 20,
		shadowColor: '#11264d',
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.08,
		shadowRadius: 14,
		elevation: 8,
	},
	boxBottom: {
		height: Dimensions.get('window').height / 4,
		width: '100%',
		alignItems: 'center',
		paddingTop: 24,
	},

	text: {
		fontWeight: 'bold',
		marginTop: 8,
		fontSize: 30,
		color: '#0f172a',
	},
	titleInput: {
		marginLeft: 5,
		color: '#64748b',
		marginTop: 12,
		fontWeight: '600',
		fontSize: 12,
	},
	boxInput: {
		width: '100%',
		height: 46,
		borderWidth: 1,
		borderRadius: 14,
		marginTop: 8,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 12,
		backgroundColor: '#f8fafc',
		borderColor: '#dbe5f4',
	},
	input: {
		height: '100%',
		width: '90%',
		color: '#0f172a',
	},
	button: {
		width: 220,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#2563eb',
		borderRadius: 14,
		shadowColor: '#1e3a8a',
		shadowOpacity: 0.25,
		shadowRadius: 8,
		elevation: 7,
	},
	textButton: {
		fontSize: 16,
		color: '#ffff',
		fontWeight: 'bold',
	},
	textBottom: {
		marginTop: 14,
		fontSize: 16,
		color: '#64748b',
	},
	textBottomLink: {
		color: '#2563eb',
		fontWeight: 'bold',
	},
});
