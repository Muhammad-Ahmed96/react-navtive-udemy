import React from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'


const ListScreen = () => {
	const friends = [
		// add key prop to the objects below or use keyExtractor in flat list
		{name: 'Friend # 1'},
		{name: 'Friend # 2'},
		{name: 'Friend # 3'},
		{name: 'Friend # 4'},
		{name: 'Friend # 5'},
		{name: 'Friend # 6'},
		{name: 'Friend # 7'},
		{name: 'Friend # 8'},
		{name: 'Friend # 9'},
		{name: 'Friend # 10'}
	]
	return (
		<FlatList
			// horizontal
			// showsHorizontalScrollIndicator={false}
			keyExtractor={(friend) => friend.name} 
			data={friends}
			renderItem={({item}) => {
				return <Text style={styles.textStyle}>{item.name}</Text>
			}}
		/>
	)
}

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 50,
		borderColor: '#e4e4e4'
	}
});
export default ListScreen;