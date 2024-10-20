/**
 * Basic React Native App
 * -  navigation example 
 *   - basic structure 
 *   - add stack navigator
 *   - add initial screens
 *   - move between screens
 * - optional pragmas... 
 *   - pragma for prettier usage
 *   - https://prettier.io/docs/en/options.html#require-pragma
 * @format
 *   - pragma for flow tool (static type checker) 
 *   - https://flow.org/en/docs/usage/#toc-prepare-your-code-for-flow
 * @flow strict-local
 */

// Navigation example
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// create object for stack navigator
const Stack = createNativeStackNavigator();

/* utility components
*  - container for screen
*  - text content with custom style
*/

// container for screen content and components
class Container extends Component {
	render() {
		return (
			<View style={styles.container}>
				{this.props.children}
			</View>
		);
	}
}

// generic text content with custom style
class ContentText extends Component {
	render() {
		return (
			<Text style={this.props.textStyle}>
				{this.props.children}
			</Text>
		);
	}
}

/* content components
*  - header
*  - main
*  - ...
*/

// header content and structure
class Header extends Component {
	render() {
		return (
			<View style={this.props.headingStyle}>
				<ContentText textStyle={styles.headingText}>
					{this.props.title}
				</ContentText>
			</View>
		);
	}
}

// main content and structure - e.g. text, image &c.
class MainContent extends Component {
	render() {
		return (
			<View style={this.props.mainStyle}>
				<ContentText textStyle={styles.contentText}>
					{this.props.content}		
          {this.props.children}
				</ContentText>
			</View>
		);
	}
}

// main content and structure - e.g. text, image &c.
class SloganContent extends Component {
	render() {
		return (
			<View style={this.props.mainStyle}>
				<ContentText textStyle=
					{styles.sloganText}
					numberOfLines={2}
					adjustsFontSizeToFit={true} >
					{this.props.content}		
          			{this.props.children}
				</ContentText>
			</View>
		);
	}
}

class SearchContent extends Component {
	render() {
		return (
			<View style={this.props.mainStyle}>
				<ContentText textStyle={styles.contentText}>
					{this.props.content}		
          {this.props.children}
				</ContentText>
			</View>
		);
	}
}

/* screen components
*  - home screen
*  - help screen
*  - template screen
*/
 
// home screen components grouped in container...
class HomeScreen extends Component {
	render() {
		return (
			<Container>
				<Header headingStyle={styles.heading} title="Flourish" />	
				<SloganContent mainStyle={styles.slogan} content="Plant care information for plant parents everywhere" />
				<SearchContent mainStyle={styles.search} content="Search here..." />
				<MainContent mainStyle={styles.content} content={
					<Text>
						<Text style={styles.boldText}>{
							"Buttercup (Ranunculaceae) Family\n" + 
							"Cotton (Malvaceae) Family\n" +
							"Daisy (Asteraceae) Family\n" +
							"Iris (Iridaceae) Family\n" +
							"Figwort (Scrophulariaceae) Family\n" +
							"Lily (Liliaceae) Family\n" +
							"Mint (Lamiaceae) Family\n" +
							"Mustard (Brassicaceae) Family\n" +
							"Rose (Rosaceae) Family\n" +
							"Spurge (Euphorbiaceae) Family\n" +
							"Stonecrop (Crassulaceae) Family\n" +
							"Violet (Violaceae) Family"
						}</Text>
					</Text>
				}/>
				<View style={styles.buttonBox}>
						<Button
							color="#C2E9B8"
							title="Plant Template"
							onPress={() => this.props.navigation.navigate('Plant Template')}
						/>
				</View>
				<View style={styles.buttonBox}>
					<Button
						color="#C2E9B8"
						title="About/Help"
						onPress={() => this.props.navigation.navigate('About/Help')}
					/>
				</View>
			</Container>
		);
	}
}

// help screen
class HelpScreen extends Component {
	render() {
		return (
			<Container>
				<Header headingStyle={styles.heading} title="About/Help" />
				<MainContent mainStyle={styles.content} content={
					"Finding Plants:\n" +
					"\t\tClick on a plant family to see the plants within it\n" +
					"\t\tOR\n" +
					"\t\ttype in the search bar\n\n" +
					"To view information about plant care:\n" +
					"\t\tNavigate to a screen for a specific plant\n\n" +
					"About: This app provides information about plant care in one place so people can more easily take care of their plants."
					} />
				<View style={styles.buttonBox}>
					<Button
						color="#C2E9B8"
						title="Go Home"
						onPress={() => this.props.navigation.navigate('Home')}
					/>
				</View>
			</Container>
		);
	}
}

// template screen
class TemplateScreen extends Component {
	render() {
		return (
			<Container>
				<Header headingStyle={styles.heading} title="Common Name" />
				<MainContent mainStyle={styles.content} content={
					"*Photo of Plant Here*"
					} />
				<MainContent mainStyle={styles.content} content={
					<Text>
						<Text style={styles.boldText}>Common Name: </Text>
						Common Name {"\n"}
						<Text style={styles.boldText}>Scientific Name: </Text>
						Scientific Name {"\n"}
						<Text style={styles.boldText}>Light: </Text>
						Light {"\n"}
						<Text style={styles.boldText}>Temperature: </Text>
						Temperature {"\n"}
						<Text style={styles.boldText}>Humidity: </Text>
						Humidity {"\n"}
						<Text style={styles.boldText}>Watering: </Text>
						Watering {"\n"}
						<Text style={styles.boldText}>Soil: </Text>
						Soil {"\n"}
						<Text style={styles.boldText}>Fertilizer: </Text>
						Fertilizer {"\n"}
					</Text>
					} />
				<View style={styles.buttonBox}>
					<Button
						color="#C2E9B8"
						title="Go Home"
						onPress={() => this.props.navigation.navigate('Home')}
					/>
				</View>
			</Container>
		);
	}
}
				

/* app structure
*  - main component - App execution
*  - stylesheet
*  - exports
*/

class App extends Component {
	render() {
		return (
      <NavigationContainer>
		    <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            //options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="About/Help" component={HelpScreen} />
		  <Stack.Screen name="Plant Template" component={TemplateScreen} />
        </Stack.Navigator>	
			</NavigationContainer>
    );
   }
}

// define styles for components - define relative sizes...
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: 'white'
	},
	heading: {
		flex: .5,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 5,
		padding: 5,
		backgroundColor: '#E6F5C7',
	},
	slogan: {
		flex: .5,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 5,
		paddingHorizontal: 30,
		backgroundColor: '#C2E9B8',
	},
	sloganText: {
		textAlign: 'center',
		color: '#000000',
		fontSize: 16,
	},
	search: {
		flex: .5,
		justifyContent: 'center',
		margin: 5,
		paddingHorizontal: 10,
		backgroundColor: '#E5E5E5',
	},
	content: {
		flex: 3,
		alignItems: 'left',
		margin: 5,
		padding: 10,
		backgroundColor: '#E6F5C7',
	},
	headingText: {
		textAlign: 'center',
		color: '#000000',
		fontSize: 24,
		fontWeight: 'bold',
	},
	contentText: {
		color: '#000000',
		fontSize: 16,
	},
  	buttonBox: {
		padding: 10,
	},
	boldText: {
		fontWeight: 'bold', // To make the text bold
	},
});

// export App - Home Screen component
export default App;

