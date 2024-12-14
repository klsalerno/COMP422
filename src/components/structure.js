/*
* module
* - components/structure.js
* - structural components
*/

import React from 'react';
import { Button, Text, View } from 'react-native';

// import default styles
import { styles } from '../styles/default.js';
import { getFontFamily } from '../utils/fontFamily.ts';

/* 
* CONTENT
* - header
* - main
*/

const Wrapper = props => {

	return (
		<View style={props.style}>
			{props.children}
		</View>
	);

}

const Container = ({ children }) => (
	<View style={styles.container}>
	  {children}
	</View>
  );

// Functional Component for Header
const Header = ({ headingStyle, title }) => (
	<View style={headingStyle}>
	  <Text style={[styles.headingText, {fontFamily: getFontFamily(true, 'regular')}]}>{title}</Text>
	</View>
);
  
// Functional Component for Main Content
const MainContent = ({ mainStyle, content, children }) => (
	<View style={mainStyle}>
	  <Text style={[styles.contentText, {fontFamily: getFontFamily(false, 'regular')}]}>
		{content}
		{children}
	  </Text>
	</View>
);
  
// Functional Component for Subtitle Content
const SubContent = ({ mainStyle, content, children }) => (
	<View style={mainStyle}>
	  <Text style={[styles.subText, {fontFamily: getFontFamily(true, 'regular')}]}>
		{content}
		{children}
	  </Text>
	</View>
);
  
// Functional Component for Search Content
const SearchContent = ({ mainStyle, content, children }) => (
	<View style={mainStyle}>
	  <Text style={styles.searchText}>
		{content}
		{children}
	  </Text>
	</View>
);
  
// Functional Component for Button Navigation
const NavButton = ({ color, title, onPress }) => (
	<Button color={color} title={title} onPress={onPress} />
);
  
export { Wrapper, Container, Header, MainContent, SubContent, SearchContent, NavButton };
