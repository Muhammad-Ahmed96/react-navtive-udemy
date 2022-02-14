import React from 'react';
import { Text, StyleSheet, View} from 'react-native'

const ComponentsScreen = () => {
    return (
			<View> 
				<Text style={styles.textStyle}>Hello, Hafsa Mubeen,!!!</Text>
				<Text style={{ fontSize: 50}}>Hello, Hafsa Mubeen,!!!</Text>
    	</View>
		);
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen;