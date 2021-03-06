//by Fredo

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Image  } from 'react-native';
import { Icon } from 'react-native-elements';


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
            <View style={styles.bot}>
                <Icon
                    name="instagram"
                    type="font-awesome"
                    color="#8134AF"
                    onPress={() => { Linking.openURL('https://instagram.com/fredodotdesign/')}}
                    reverse
                />
                <Icon
                    name="github"
                    type="font-awesome"
                    color="#333"
                    onPress={() => { Linking.openURL('https://github.com/fredodotdesign')}}
                    reverse
                />
                <Icon
                    name="dribbble"
                    type="font-awesome"
                    color="#F082AC"
                    onPress={() => { Linking.openURL('https://dribbble.com/fredoalvarez')}}
                    reverse
                />
                <Icon
                    name="mouse-pointer"
                    type="font-awesome"
                    color="orange"
                    onPress={() => { Linking.openURL('https://fredo.design')}}
                    reverse
                />
                <Icon
                    name="bicycle"
                    type="font-awesome"
                    color="navy"
                    onPress={() => { Linking.openURL('http://tofighthiv.org/goto/fredo22')}}
                    reverse
                />
            </View>
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
    },
    bot: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap"
    },

})
export default Fredo;