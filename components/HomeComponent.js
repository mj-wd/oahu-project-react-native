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
        //Awesome! Great idea. Can you please implement this on all the pages since you own the tabBar? - MJ 09/10/21
        //Also, I changed all the .styles to CamelCase, and all image filenames and location, to be consistent with the rest of the App. - MJ 09/10/21
    }

    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.TextBox1}>
                    <Text style={styles.Text1}>
                        Aloha! Welcome to The Hawaii Bros' Official Oah'u Vacation Planner.
                    </Text>
                </View>
                <View style={styles.ImageBox}>
                    <Image source={require('../assets/images/hero-image-oahu.jpg')} style={styles.Image} />
                </View>
                <View style={styles.TextBox2}>
                    <Text style={styles.Text2}>
                        Click on the Attractions tab below to get started!
                    </Text>
                </View>
            </View>

        );
    }
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#4EACB8',
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0
    },
    Text1: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    Text2: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    TextBox1: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextBox2: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ImageBox: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image: {
        width: 350,
        height: 350,
        borderRadius: 175,
        borderColor: "white",
        borderWidth: 3
    },
});

export default Home;