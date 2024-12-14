/**
 * Flourish React Native App
 * 
 * Navigation:
 * - Uses Stack Navigator to switch between screens
 * - Organized with separate files for screens and styles
 */

// Import React JS base library
import React from 'react';
// Import navigation libraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import screens
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import TemplateScreen from './screens/TemplateScreen';
import WateringScreen from './screens/WateringScreen';
import DaisyListScreen from './screens/DaisyListScreen';
import PlantDetailScreen from './screens/PlantDetailScreen';

// Create object for Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
	return (
      	<NavigationContainer>
		    <Stack.Navigator initialRouteName="Home">
				
				{/* Home Screen */}
				<Stack.Screen 
					name="Home" 
					component={HomeScreen} 
					//options={{ title: 'Welcome' }}
					options={{ headerTitle: "", headerTransparent: true, headerBackVisible: true, }}
				/>
				
				{/* About/Help Screen */}
				<Stack.Screen 
					name="About/Help" 
					component={AboutScreen} 
					options={{ headerTitle: "", headerTransparent: true, headerBackVisible: true, }}
				/>
				
				{/* Plant Template Screen */}
				<Stack.Screen 
					name="Plant Template" 
					component={TemplateScreen} 
					options={{ headerTitle: "", headerTransparent: true, headerBackVisible: true }}
				/>

				{/* Watering Log Screen */}
				<Stack.Screen 
					name="Watering" 
					component={WateringScreen}
					options={{ headerTitle: "", headerTransparent: true, headerBackVisible: true }}
				/>
				
				{/* Daisy List Screen */}
				<Stack.Screen 
					name="Daisy List" 
					component={DaisyListScreen}
					options={{ headerTitle: "", headerTransparent: true, headerBackVisible: true }}
				/>
				
				{/* Plant Detail Screen */}
				<Stack.Screen 
					name="Plant Detail" 
					component={PlantDetailScreen}
					options={{ headerTitle: "", headerTransparent: true, headerBackVisible: true }} 
				/>
        	</Stack.Navigator>	
		</NavigationContainer>
    );
}
