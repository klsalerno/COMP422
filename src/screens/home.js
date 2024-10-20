/*
* screens/home.js
* - template for home screen
* - imported with routes.js for navigation
* - basic home screen for stack navigator
*/

// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Header, Main, NavButton, Wrapper } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/default.js';

const HomeScreen = props => {
	
	loadRoute = () => props.navigation.navigate('Screen1', {
    idValue: 1,
  });

	return (

		<Wrapper style={styles.wrapper}>
			<Header style={styles.screenHeader} type={styles.h1} heading="Nav stack" />
			<Main style={styles.main}>
				<Header style={styles.mainHeader} type={styles.h3} heading="Menu" />
				<ContentText style={styles.defaultText}>
					some initial content text...
				</ContentText>
				<NavButton 
					color="#888888"
          screenName="Go to Screen 1" 
					onPress={loadRoute}
        />
			</Main>
		</Wrapper>

	);

};

export default HomeScreen;
