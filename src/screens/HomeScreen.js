import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // console.log(props);
  return (
    <View>
      <Text style={styles.text}>HomeScreen...</Text>
      <Button 
        title='Go To List Screen'
        onPress={() => {
          navigation.navigate("List");
          console.log('button pressed');
          // alert("Afdsasdfdfs");
        }}
      />
      <Button
        title="Go To Components"
        onPress={ () => {
          navigation.navigate("Components");
        }}
      />
      <Button
        title="Go To Image Screen"
        onPress={ () => {
          navigation.navigate("Image");
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
