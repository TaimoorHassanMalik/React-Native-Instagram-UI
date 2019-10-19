//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import Heading from './Components/Heading';
import PhotoList from './Components/PhotoList';

// create a component
class MyClass extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Heading/>
        <PhotoList/>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

//make this component available to the app
export default MyClass;
