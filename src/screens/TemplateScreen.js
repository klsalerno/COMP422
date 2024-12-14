/*
* screens/TemplateScreen.js
* - Template screen of example layout
*/

// Import React JS base library
import React from 'react';
// Import custom components
import { Header } from '../components/structure.js';
import { Button, Text, View } from 'react-native';
// Import navigation libraries
import { useNavigation } from '@react-navigation/native';
import { Container, MainContent } from '../components/structure';
// import default app styles
import { styles } from '../styles/default.js';
import { getFontFamily } from '../utils/fontFamily.ts';

// TemplateScreen component to illustrate desired layout of plant details
const TemplateScreen = () => {
    // Navigation hook
    const navigation = useNavigation();
  
    return (
      <Container>
        <Header headingStyle={styles.heading} title={
          <Text style={{fontFamily: getFontFamily(true, 'regular')}}>Common Name</Text>
        } />
        
        <MainContent mainStyle={styles.content} content={"*Photo of Plant Here*"} />
        
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

        {/* Navigation buttons */}
        <View style={styles.buttonBox}>
          <Button
            color="#FF9673"
            title="Go Home"
            onPress={() => navigation.navigate('Home')}  // Use navigation to go to the Home screen
          />
        </View>
      </Container>
    );
};
  
export default TemplateScreen;
