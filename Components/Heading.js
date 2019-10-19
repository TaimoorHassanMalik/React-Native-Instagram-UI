//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// create a component
class Heading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon style={styles.iconContainer} name="logo-instagram" size={32} />
                <Text style={styles.text}>My InStaGraM</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 4,
        flexDirection: 'row'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: 'green',
        marginRight:15,
        fontFamily:'Damascus'
    },
    iconContainer: {
        color: 'red',
        marginLeft:10
    }
});

//make this component available to the app
export default Heading;
