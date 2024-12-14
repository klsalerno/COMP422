/**
 * screens/DaisyListScreen.js
 * - Displays list of plants in daisy family
 * - Fetches data from API and filters for specific plants
 * - Perenual API: https://perenual.com/docs/api
 */

// Import React JS base library
import React, { useState, useEffect } from 'react';
// Import custom components
import { Header } from '../components/structure.js';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { Image } from 'react-native';
// Import nagivation libraries
import { useNavigation } from '@react-navigation/native';
import { Container } from '../components/structure.js';
// Import default app styles
import { styles } from '../styles/default.js';
import { getFontFamily } from '../utils/fontFamily.ts';

// DaisyListScreen component that fetches from API and displays plants in daisy family
const DaisyListScreen = () => {
  // State to store list of filtered daisy plants
  const [plants, setPlants] = useState([]);
  
  // List of plant names to filter from API
  // Case sensitive
  const daisyPlantNames = [
      'African daisy',
      'michaelmas daisy',
      'livingstone daisy'
  ];

  // Function to fetch data from the Perenual API
  const fetchPlantData = async () => {
    const foundPlants = [];
    const plantFilter = 'daisy';

    try {
      // Fetch data from API
      const response = await fetch(`https://perenual.com/api/species-list?key=sk-dOb66733c1ed39ca07613&q=${plantFilter}`);
      const data = await response.json();
      //console.log(data); // Test output

      // If response data is valid & contains plant data
      if (data && Array.isArray(data.data)) {
        // Filter plants by names in daisyPlantNames
        const daisyPlants = data.data.filter(plant =>
          daisyPlantNames.includes(plant.common_name)
        );

        // Add matching plants to daisyPlants
        if (daisyPlants.length > 0) {
          //console.log('Add'); // Test if plants are in daisyPlants
          foundPlants.push(...daisyPlants);
        }
      }

      // Update state with list of filtered plants with matching names
      setPlants(foundPlants);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  };

  // Fetch data immediately when screen loads
  useEffect(() => {
    fetchPlantData();
  }, []);

  // Navigation hook
  const navigation = useNavigation();

  // Render each plant's image and common name
  const renderItem = ({ item }) => (
    // Makes the image/text interactive to bring user to detail screen
    <TouchableOpacity onPress={() => navigation.navigate('Plant Detail', { plantId: item.id })}>
      <View style={{ margin: 10 }}>
        <Image source={{ uri: item.default_image.thumbnail }} style={{ width: 100, height: 100 }} />
        <Text style={{fontFamily: getFontFamily(false, 'regular')}}>{item.common_name}</Text>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <Container>
      <Header headingStyle={styles.heading} title={
			  <Text style={{fontFamily: getFontFamily(true, 'regular')}}>Daisy (Asteraceae)</Text>
		  } />

      {/* Display list of filtered plants */}
      <FlatList
        data={plants}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );

};

export default DaisyListScreen;