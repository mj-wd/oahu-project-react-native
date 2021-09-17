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

            <Image source={require('../assets/images/fredo.jpeg')} style={styles.image} />
            <Text style={styles.bio}>Originally from the Bronx, N.Y., Fredo is an aspiring graphic designer and UX/UI developer, who currently works in retail operations for a major tech company. In his spare time, Fredo enjoys gaming, photography, and training for AIDS/LifeCycle. Fredo lives with his husband John and his two cats in a deee-luxe apartment in the sky in downtown San Francisco, Calif.</Text>
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
export default Fredo;