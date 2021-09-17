//by Zach

import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image  } from 'react-native';


class Zach extends Component {

    static navigationOptions = {
        title: 'Meet Zach!',
        tabBarVisible: false,
        headerStyle :{
            backgroundColor: '#07607B',
            height: 90,
            paddingTop: 45
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }


    render() {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity>

            <Image source={require('../assets/images/hero-image-oahu.jpg')} style={styles.image} />
            <Text style={styles.bio}>Insert Zach Bio</Text>


            </TouchableOpacity>
        </ScrollView>
    )
}
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#4EACB8"
      },
    image: {
        width: 350,
        height: 350,
    },
    bio: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'left'
    }
})
export default Zach;