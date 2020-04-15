import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    // const greeting = "Hi there";
    const greeting = <Text>Hi there</Text>;
    const name= 'Claire';
    return <View>
        <Text style = {styles.textStyle}>Getting started with React Native</Text>
        <Text style = {styles.subheaderStyle}>My name is {name}</Text>
        </View>
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 35
    },
    subheaderStyle:{
        fontSize: 20
    }
})
export default ComponentsScreen;




