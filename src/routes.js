/*
* routes.js
* - app routing
* - basic usage for stack navigator
*/

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* import required screen components
*  - home screen
*  - basic screen 
*  - ...
*/
import HomeScreen from './screens/home.js';
import BasicScreen from './screens/basic_screen.js';

// create object for stack navigator
const Stack = createNativeStackNavigator();

const Routes = props => {

	return (

		<NavigationContainer>
			<Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4c566a',
          },  
          headerTintColor: '#EEEEEE',
          headerTitleStyle: {
            fontWeight: '300',
          },
        }}
      >
				<Stack.Screen 
       	 name="Home"
       	 component={HomeScreen} 
       	 options={{ 
       	   title: 'Home', 
       	 }}
      	/>
				<Stack.Screen 
					name="Screen1" 
					component={BasicScreen} 
					options={{
						title: 'Screen 1'
					}}
				/>
      </Stack.Navigator>
		</NavigationContainer>
		
	);

};

export default Routes;


