//by Zach
//Work in progress with the styling
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



class Home extends Component {

    static navigationOptions = {
        title: 'Home',
        tabBarVisible: false
        //tabBarVisible gets rid of the extra tab on top saying which tab we are currently in.
        //Just a design idea.
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textbox1}>
                    <Text style={styles.text1}>
                        Aloha! Welcome to The Hawaii Bros' Official Oah'u Vacation Planner.
                    </Text>
                </View>
                <View style={styles.imagebox}>
                    <Image source={require('./images/heroimageoahu.jpg')} style={styles.image} />
                </View>
                <View style={styles.textbox2}>
                    <Text style={styles.text2}>
                        Click on the Attractions tab below to get started!
                    </Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4EACB8',
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0
    },
    text1: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text2: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textbox1: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textbox2: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagebox: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        width: 350,
        height: 350,
        borderRadius: 175,
        borderColor: "white",
        borderWidth: 3,

    },

});

export default Home;