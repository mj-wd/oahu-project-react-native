//by Fredo
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';
import { Card, Button, ListItem } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { Assets } from 'react-navigation-stack';

class AttractionsLanding extends Component {
    
    static navigationOptions = {
        // title: 'The Best of Oahu',
        tabBarVisible: false
        // headerStyle :{
        //     backgroundColor: '#07607B',
        //     height: 90,
        //     paddingTop: 45
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //     color: '#fff'
        // }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Featured Attractions
                </Text>
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Beaches')}
                    activeOpacity='0'
                    underlayColor
                >
                    <Card containerStyle={styles.tile}>
                        <Text>
                            Beaches
                        </Text>
                    </Card>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Restaurants')}
                    activeOpacity='0'
                    underlayColor
                >
                    <Card containerStyle={styles.tile}>
                        <Text>
                            Restaurants
                        </Text>
                    </Card>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Shopping')}
                    activeOpacity='0'
                    underlayColor
                >
                    <Card containerStyle={styles.tile}>
                        <Text>
                            Shopping
                        </Text>
                    </Card>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Sightseeing')}
                    activeOpacity='0'
                    underlayColor
                >
                    <Card containerStyle={styles.tile}>
                        <Text>
                            Sightseeing
                        </Text>
                    </Card>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Traditions')}
                    activeOpacity='0'
                    underlayColor
                >
                    <Card containerStyle={styles.tile}>
                        <Text>
                            Traditions
                        </Text>
                    </Card>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#4EACB8',
        flex: 1,
    },
    title: {
        marginTop: 10,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    tile: {
        height: 100,
        backgroundColor: '#fff',
        borderColor: '#B8E7CA',
        borderRadius: 10,
        borderWidth: 5,
        padding: 0,
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default AttractionsLanding;