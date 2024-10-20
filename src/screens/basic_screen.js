/*
* screens/basic_screen.js
* - basic test screen for stack navigator
*/

// import react js base library
import React, { useState } from 'react';
// import custom components
import { ContentText, Header, Main, NavButton, Wrapper } from '../components/structure.js';
// import default app styles
import { styles } from '../styles/default.js';

const BasicScreen = props => {

	loadRouteHome = () => props.navigation.navigate('Home');

	return (

		<Wrapper style={styles.wrapper}>
			<Header style={styles.screenHeader} type={styles.h1} heading="Nav stack" />
			<Main style={styles.main}>
				<Header style={styles.mainHeader} type={styles.h3} heading="Menu" />
				<ContentText style={styles.defaultText}>
					some initial passed content text...{props.route.params.idValue}
				</ContentText>
				<NavButton 
					color="#888888"
          screenName="Go to Home" 
					onPress={loadRouteHome}
        />
			</Main>
		</Wrapper>

	);

};

export default BasicScreen;

	

