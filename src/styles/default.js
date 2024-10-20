/*
* module
* - styles/default.js
* - default app styles
*/

import React from 'react';
import { StyleSheet } from 'react-native';

// default style
const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		height: '95%',
		backgroundColor: '#eceff4',
	},
	screenHeader: {
		marginTop: 1,
		padding: 15,
		backgroundColor: '#4c586a',
	},
	header: {
		marginTop: 5,
		marginBottom: 5,
		color: '#4c566a',
		fontSize: 20,
		fontWeight: '400',
	},
	h1: {
		color: '#eceff4',
		fontSize: 28,
		fontWeight: '300',
	},
	h2: {
		color: '#eceff4',
		fontSize: 26,
		fontWeight: '300',
	},
	h3: {
		color: '#eceff4',
		fontSize: 24,
		fontWeight: '300',
	},
	h4: {
		color: '#eceff4',
		fontSize: 22,
		fontWeight: '300',
	},
	main: {
		marginTop: 15,
		color: '#3b4252',
		fontSize: 20,
	},
	defaultContent: {
		padding: 15,
	},
	defaultText: {
		marginTop: 5,
		marginBottom: 5,
		fontSize: 18,
		fontWeight: '300',	
	},
});

export {
	styles,
};

