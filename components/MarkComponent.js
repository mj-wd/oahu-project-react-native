//by Zach

import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image  } from 'react-native';



class Mark extends Component {

    static navigationOptions = {
        title: 'Meet Mark!',
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
            <Image source={require('../assets/images/mark.jpg')} style={styles.image} />
            <Text style={styles.bio}>Mark was born in Boston, and has lived in Seattle and Los Angeles. He currently resides near Mexico City with his fiance. He enjoys his motorcycle, reading, and striving to never eat the same meal twice. In his past lives he was a chef, a bartender, and a construction project engineer. He is now working towards a career in web development.</Text>
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

export default Mark;