/**
 * screens/HomeScreen.js
 * - Main home screen for app
 */

// Import React JS base library
import React from 'react';
// Import custom components
import { Header, SubContent, SearchContent } from '../components/structure.js';
import { Button, Text, View } from 'react-native';
// Import navigation libraries
import { useNavigation } from '@react-navigation/native'; // Hook for navigation
import { Container, MainContent } from '../components/structure';
// Import default app styles
import { styles } from '../styles/default.js';
import { getFontFamily } from '../utils/fontFamily.ts';

// HomeScreen component for app's main screen
const HomeScreen = () => {
	// Navigation hook
	const navigation = useNavigation();
  
	return (
		<Container>
			<Header headingStyle={styles.heading} title={
				<Text style={{fontFamily: getFontFamily(true, 'regular')}}>Flourish</Text>
			} />

			<SearchContent mainStyle={styles.search} content="Search here..." />
			
			<SubContent mainStyle={styles.sub} content={
				<Text style={{fontFamily: getFontFamily(true, 'regular')}}>Plant Families:</Text>
			} />
			
			{/* Main content section with list of plant families */}
			<MainContent mainStyle={styles.content} content={
				<Text>
					<Text style={{fontFamily: getFontFamily(false, 'regular')}}>
					{"Buttercup (Ranunculaceae)\n" + 
					"Cotton (Malvaceae)\n"}
					</Text>
					<Text style={{fontFamily: getFontFamily(false, 'regular')}} onPress={() => navigation.navigate('Daisy List')}>
					{"Daisy (Asteraceae)\n"}
					</Text>
					<Text style={{fontFamily: getFontFamily(false, 'regular')}}>
					{"Iris (Iridaceae)\n" +
					"Figwort (Scrophulariaceae)\n" +
					"Lily (Liliaceae)\n" +
					"Mint (Lamiaceae)\n" +
					"Mustard (Brassicaceae)\n" +
					"Rose (Rosaceae)\n" +
					"Spurge (Euphorbiaceae)\n" +
					"Stonecrop (Crassulaceae)\n" +
					"Violet (Violaceae)"}
					</Text>
				</Text>
			} />
			
			{/* Navigation buttons */}
			<View style={styles.buttonBox}>
				<Button
					color="#FF9673"
					title="About/Help"
					onPress={() => navigation.navigate('About/Help')}
				/>
			</View>

			<View style={styles.buttonBox}>
				<Button
					color="#FF9673"
					title="Watering Log"
					onPress={() => navigation.navigate('Watering')}
				/>
			</View>
		</Container>
	);
};

export default HomeScreen;
