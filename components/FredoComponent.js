//by Zach

import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, TouchableOpacity, Linking, Image  } from 'react-native';


class Fredo extends Component {

    static navigationOptions = {
        title: 'Meet Fredo!',
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

            <Image source={require('../assets/images/pali.jpg')} style={styles.image} />
            <Text style={styles.bio}>Insert Fredo Bio</Text>


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
        width: 400,
        height: 400,
    },
    bio: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center'
    }
})
export default Fredo;