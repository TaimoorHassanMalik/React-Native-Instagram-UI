//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
class PhotoSction extends Component {

    state = {
        heartIcon: 'ios-heart-empty',
        like: false
    }

    toggleicon = () => {
        this.setState({
            like: !this.state.like
        })
        if (this.state.like) {
            this.setState({
                heartIcon: 'ios-heart'
            })
        } else {
            this.setState({
                heartIcon: 'ios-heart-empty'
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.picsection}>
                    <Image style={styles.profilepic} source={{uri: this.props.detail.user_avatar}} />
                    <Text style={styles.username}>{this.props.detail.username}</Text>
                </View>

                <View>
                    <Image style={{ height: 250, width: null, borderRadius: 15 }} source={{uri: this.props.detail.image}} />
                </View>
                <View style={styles.iconContainer}>
                    <TouchableWithoutFeedback onPress={this.toggleicon}>
                        <Icon style={{...styles.iconContainer,color: this.state.heartIcon === 'ios-heart-empty' ? 'black' : 'red'
                        }} name={this.state.heartIcon} size={32} />
                    </TouchableWithoutFeedback>

                    <Icon style={styles.iconContainer} name="ios-add-circle" size={32} />
                    <Icon style={styles.iconContainer} name="ios-attach" size={32} />
                </View>
                <View style={styles.likeContainer}>
                    <Text style={styles.nameContainer}>{this.props.detail.caption}</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        backgroundColor: '#f1f2f6',
        borderRadius: 10
    },
    picsection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilepic: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin:3
    },
    username: {
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 10
    },
    iconContainer: {
        paddingVertical: 5,
        flexDirection: 'row',
        paddingRight: 17,

    },
    likeContainer: {
        flexDirection: 'row'
    },
    nameContainer: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingRight: 10
    }

});

//make this component available to the app
export default PhotoSction;
