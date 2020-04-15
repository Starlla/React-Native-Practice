import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        // {name: 'Friend #1', key:'1'},
        // {name: 'Friend #2', key:'2'},
        // {name: 'Friend #3', key:'3'},
        // {name: 'Friend #4', key:'4'},
        // {name: 'Friend #5', key:'5'},
        // {name: 'Friend #6', key:'6'},
        // {name: 'Friend #7', key:'7'},
        // {name: 'Friend #8', key:'8'},
        // {name: 'Friend #9', key:'9'},
        {name: 'Friend #1',age: 20},
        {name: 'Friend #2',age: 50},
        {name: 'Friend #3',age: 40},
        {name: 'Friend #4',age: 30},
        {name: 'Friend #5',age: 20},
        {name: 'Friend #6',age: 20},
        {name: 'Friend #7',age: 20},
        {name: 'Friend #8',age: 20},
        {name: 'Friend #9',age: 20},
    ]
    return (
        <FlatList
            // horizontal
            // showHorizontalScrollIndicator = {false}
            keyExtractor = {friend => friend.name}
            data = {friends}
            renderItem = {({item}) => {
            return <Text style={styles.textStyle}>{item.name}-Age{item.age}</Text>;
        }} />
            );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
