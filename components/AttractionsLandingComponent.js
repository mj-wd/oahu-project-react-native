//by Fredo
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

class AttractionsLanding extends Component {

    static navigationOptions = {
        title: 'The Best of Oahu',
        tabBarVisible: false,
        headerStyle :{
            backgroundColor: '#07607B',
            height: 90,
            paddingTop: 45
        },
        headerTintColor: '#07607B',
        headerTitleStyle: {
            color: '#fff'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Featured Attractions
                </Text>
                <Pressable style={styles.touchContainer} onPress={() => this.props.navigation.navigate('Beaches')}>
                    <Image source={require('../assets/images/beach.jpg')} style={styles.thumb} />
                    <Text style={styles.subtitle}>
                        Beaches
                    </Text>
                </Pressable>
                <Pressable style={styles.touchContainer} onPress={() => this.props.navigation.navigate('Restaurants')}>
                    <Image source={require('../assets/images/ricados.jpg')} style={styles.thumb} />
                    <Text style={styles.subtitle}>
                        Restaurants
                    </Text>
                </Pressable>
                <Pressable style={styles.touchContainer} onPress={() => this.props.navigation.navigate('Shopping')}>
                    <Image source={require('../assets/images/alamoana.jpg')} style={styles.thumb} />
                    <Text style={styles.subtitle}>
                        Shopping
                    </Text>
                </Pressable>
                <Pressable style={styles.touchContainer} onPress={() => this.props.navigation.navigate('Sightseeing')}>
                    <Image source={require('../assets/images/pearl-harbor.jpg')} style={styles.thumb} />
                    <Text style={styles.subtitle}>
                        Sightseeing
                    </Text>
                </Pressable>
                <Pressable style={styles.touchContainer} onPress={() => this.props.navigation.navigate('Traditions')}>
                    <Image source={require('../assets/images/luau.jpg')} style={styles.thumb} />
                    <Text style={styles.subtitle}>
                        Traditions
                    </Text>
                </Pressable>
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
        textAlign: 'center',
        alignItems: 'center',
    },
    touchContainer: {
        flex: 1,
        alignItems:'center',
        marginVertical: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#07607B',
        borderColor: '#07607B',
        borderRadius: 15,
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: 16,
        alignSelf: 'center',
    },
    thumb: {
        width: 180,
        height: 90,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F6F1D2',
        marginLeft: 24,
        alignSelf: 'center',
    }

});

export default AttractionsLanding;