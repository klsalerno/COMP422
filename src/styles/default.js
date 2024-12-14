/*
* module
* - styles/default.js
* - default app styles
*/

import { StyleSheet } from 'react-native';

// default style
// define styles for components - define relative sizes...
export const styles = StyleSheet.create({
	// Container
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: '#FFFFFF'
	},

	// Heading & text
	heading: {
		flex: .5,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 5,
		padding: 5,
	},
	headingText: {
		textAlign: 'center',
		color: '#000000',
		fontSize: 48,
		fontWeight: 'bold',
	},

	// Subheading & text
	sub: {
		flex: .5,
		justifyContent: 'center',
		margin: 5,
		paddingHorizontal: 10,
	},
	subText: {
		color: '#000000',
		fontSize: 28,
	},

	// Search bar & text
	search: {
		flex: .5,
		justifyContent: 'center',
		margin: 10,
		paddingHorizontal: 10,
		backgroundColor: '#A73C5A',
		borderRadius: 10,
	},
	searchText: {
		color: '#FFFFFF',
		fontSize: 16,
	},
	
	// Content areas & text
	content: {
		flex: 3,
		alignItems: 'left',
		margin: 10,
		padding: 10,
		backgroundColor: '#FFD3CA',
		borderRadius: 10,
	},
	contentText: {
		color: '#000000',
		fontSize: 16,
		lineHeight: 30,
	},

	// Button styles
  	buttonBox: {
		padding: 10,
	},
	buttonRowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	buttonBoxRow: {
		flex: 1,
		marginHorizontal: 10,
	},

	// Might not be needed with use of custom fonts
	boldText: {
		fontWeight: 'bold', // To make the text bold
	},

	// Photo styles
	photo: {
		width: '95%',
		height: 215,
		alignSelf: 'center',
		margin: 10,
		borderRadius: 10,
	}
});
