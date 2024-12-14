/**
 * screens/PlantDetailScreen.js
 * - Displays care details for selected plant
 * - Fetches data from API and filters for that plant
 * - Perenual API: https://perenual.com/docs/api
 */

// Import React JS base library
import React, { useState, useEffect } from 'react';
// Import custom components
import { Header } from '../components/structure.js';
import { Image, Button, Text, View } from 'react-native';
// Import navigation libraries
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, MainContent } from '../components/structure';
// Import default app styles
import { styles } from '../styles/default.js';
import { getFontFamily } from '../utils/fontFamily.ts';

// PlantDetailScreen component that displays care information about a plant
const PlantDetailScreen = () => {
    // Navigation hook
    const navigation = useNavigation();  // Using the navigation hook for functional components
    
    const route = useRoute();
    const { plantId } = route.params; // Get the plantId from navigation params
    const [plant, setPlant] = useState(null);
    //onsole.log('Plant id: ' + plantId);

    // Fetch plant details by ID
    const fetchPlantDetails = async () => {
        try {
            const response = await fetch(`https://perenual.com/api/species/details/${plantId}?key=API-KEY`);
            const data = await response.json();
            setPlant(data); // Update state with the fetched plant details
        } catch (error) {
            console.error('Error fetching plant details:', error);
        }
    };

    // Fetch plant details immediately when page loads
    useEffect(() => {
        fetchPlantDetails();
    }, [plantId]); // Fetch when plantId changes

    // Show message if data not loaded yet
    if (!plant) {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading...</Text>
        </View>
        );
    }

    return (
        <Container>

            <Header headingStyle={styles.heading} title={
			    <Text style={{fontFamily: getFontFamily(true, 'regular')}}>{plant.common_name}</Text>
		    } />

            <Image
                source={{ uri: plant.default_image.original_url }}
                style={styles.photo}
            />

            {/* Main content section with details about the plant and its care */}
            <MainContent mainStyle={styles.content} content={
		        <Text>
                    <Text style={{fontFamily: getFontFamily(false, 'regular')}}>
                        {"Common Name: " + plant.common_name +
                        "\nScientific Name: " + plant.scientific_name.join(', ') +
                        "\nSunlight: " + plant.sunlight.join(', ') +
                        "\nHardiness Zone(s): " + plant.hardiness.min + "-" + plant.hardiness.max +
                        "\nWatering: " + plant.watering + " (Every " + plant.watering_general_benchmark.value + " " + plant.watering_general_benchmark.unit + ")" +
                        "\nSoil: " + (plant.soil.length > 0 ? plant.soil.join(', ') : "Soil information not available") +
                        "\nIndoor or Outdoor: " + (plant.indoor == false ? "Outdoor" : "Indoor") +
                        "\nCare Level: " + plant.care_level +
                        "\nDescription: To Be Added"}
                    </Text>
                </Text>
            } />
            
            {/* Navigation buttons */}
            <View style={styles.buttonRowContainer}>
                <View style={styles.buttonBoxRow}>
                    <Button
                        color="#FF9673"
                        title="About/Help"
                        onPress={() => navigation.navigate('About/Help')}  // Using the navigation hook
                    />
                </View>
                <View style={styles.buttonBoxRow}>
                    <Button
                        color="#FF9673"
                        title="Watering Log"
                        onPress={() => navigation.navigate('Watering')}  // Using the navigation hook
                    />
                </View>
            </View>

            <View style={styles.buttonBox}>
                <Button
                    color="#FF9673"
                    title="Go Home"
                    onPress={() => navigation.navigate('Home')}  // Using the navigation hook
                />
            </View>
        </Container>
    );

};

export default PlantDetailScreen;