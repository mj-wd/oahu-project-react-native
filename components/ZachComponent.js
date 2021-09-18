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

            <Image source={require('../assets/images/zach.jpg')} style={styles.image} />
            <Text style={styles.bio}>Born and raised in Honolulu, Hawaii, Zach has spent his whole 20 years of existence on an island. When he's not coding, Zach likes to play video games, go on hikes with his girlfriend Sakura, and binge watch anime with Sakura. Zach has worked in retail in the past but is now looking for remote web development oppurtunities.</Text>


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