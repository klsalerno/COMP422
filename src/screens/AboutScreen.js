/**
 * screens/AboutScreen.js
 * - About screen with app information
 */

// Import React JS base library
import React from 'react';
// Import custom components
import { Header, SubContent } from '../components/structure.js';
import { Button, Text, View } from 'react-native';
// Import navigation libraries
import { useNavigation } from '@react-navigation/native';
import { Container, MainContent } from '../components/structure';
// Import default app styles
import { styles } from '../styles/default.js';
import { getFontFamily } from '../utils/fontFamily.ts';

// AboutScreen component to provide information about app
const AboutScreen = () => {
	// Navigation hook
	const navigation = useNavigation();
  
	return (
		<Container>
			
			<Header headingStyle={styles.heading} title={
				<Text style={{fontFamily: getFontFamily(true, 'regular')}}>About</Text>
			} />
			
			<SubContent mainStyle={styles.sub} content={
				<Text style={{fontFamily: getFontFamily(true, 'regular')}}>Plant care information for plant parents everywhere</Text>
			} />
			
			<MainContent 
				mainStyle={styles.content} 
				content={
					"This app provides information about plant care in one place, so people can more easily take care of their plants.\n\n" +
					"Features:\n" +
					"\t- Browse plant families\n" +
					"\t- Search for specific plants\n" +
					"\t- View care instructions for different plants\n\n" +
					"Our goal is to make plant care easy and accessible for plant parents everywhere."
				}
			/>
			
			{/* Navigation button */}
			<View style={styles.buttonBox}>
				<Button
					color="#FF9673"
					title="Watering Log"
					onPress={() => navigation.navigate('Watering')}
				/>
			</View>
			
			<View style={styles.buttonBox}>
				<Button
					color="#FF9673"
					title="Go Home"
					onPress={() => navigation.navigate('Home')}
				/>
			</View>
		</Container>
	);
};

export default AboutScreen;
