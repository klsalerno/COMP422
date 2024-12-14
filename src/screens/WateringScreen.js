/**
 * screens/HomeScreen.js
 * - Main home screen for app
 */

// Import React JS base library
import React from 'react';
// Import custom components
import { Header } from '../components/structure.js';
import { Button, Text, View } from 'react-native';
// Import navigation libraries
import { useNavigation } from '@react-navigation/native'; // Hook for navigation
import { Container, MainContent } from '../components/structure';
// Import default app styles
import { styles } from '../styles/default.js';
import { getFontFamily } from '../utils/fontFamily.ts';

// WateringScreen component for app's main screen
const WateringScreen = () => {
	// Navigation hook
	const navigation = useNavigation();
  
	return (
		<Container>
			<Header headingStyle={styles.heading} title={
				<Text style={{fontFamily: getFontFamily(true, 'regular')}}>Watering Log</Text>
			} />

			<View style={styles.buttonBox}>
				<Button
					color="#FF9673"
					title="Add Entry"
				/>
			</View>

            <View style={styles.buttonRowContainer}>
                <View style={styles.buttonBoxRow}>
                    <Button
                        color="#FF9673"
                        title="Filter"
                    />
                </View>
                <View style={styles.buttonBoxRow}>
                    <Button
                        color="#FF9673"
                        title="Sort"
                    />
                </View>
            </View>
			
			{/* Main content section with watering records */}
			<MainContent mainStyle={styles.content} content={
				<Text>
					<Text style={{fontFamily: getFontFamily(false, 'regular')}}>
					    {"This screen is currently incomplete" +
                        "It intends to allow users to log when they water their plants"}
					</Text>
				</Text>
			} />
			
			{/* Navigation buttons */}
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

export default WateringScreen;
