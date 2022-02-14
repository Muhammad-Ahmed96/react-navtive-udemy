import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
	console.log(props);
	return <View>
		<Image source={props.image}/>
		<Text>{props.title}</Text>
	</View>
};

const styles = StyleSheet.create({});

export default ImageDetail;
