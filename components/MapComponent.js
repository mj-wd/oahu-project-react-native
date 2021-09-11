//by Mark
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Map extends Component {

    static navigationOptions = {
        title: 'Map',
        tabBarVisible: false
    }

    render() {
        return ( 
            <View style={styles.Container}>
                <View style={styles.TextBox1}>
                    <Text style={styles.Text1}>
                        Will contain a Google Map with pins for the attractions. Please pardon me during the renovation.
                    </Text>
                </View>
                <View style={styles.ImageBox}>
                    <Image source={require('../assets/images/men-at-work.jpg')} style={styles.Image} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#4EACB8',
        flex: 1,
        justifyContent: 'center',
        padding: 0
    },
    Text1: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    TextBox1: {
        justifyContent: 'center'
    },
    ImageBox: {
        backgroundColor: '#4EACB8',
        alignSelf: 'center'
    },
    Image: {
        width: 350,
        height: 350,
    },
});

export default Map;