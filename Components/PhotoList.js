//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PhotoSection from './PhotoSection';
import data from '../data';
// create a component
class PhotoList extends Component {

    state = {
        data: data
    }
    getPhotos = () => {
        return this.state.data.map(data=>{
            return <PhotoSection detail={data} key={data.id}/>
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.getPhotos()}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
    },
});

//make this component available to the app
export default PhotoList;
