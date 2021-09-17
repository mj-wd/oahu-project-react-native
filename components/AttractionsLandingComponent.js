//by Fredo
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
// import { LinearGradient } from 'expo-linear-gradient';

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
                        <Text style={styles.subtitle}>
                        <Avatar rounded size='large' source={require('../assets/images/beach.jpg')} />
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
                        <Text style={styles.subtitle}>
                        <Avatar rounded  size='large' source={require('../assets/images/ricados.jpg')} />
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
                        <Text style={styles.subtitle}>
                        <Avatar rounded size='large' source={require('../assets/images/alamoana.jpg')} />
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
                        <Text style={styles.subtitle}>
                        <Avatar rounded size='large' source={require('../assets/images/pearl-harbor.jpg')} />
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
                        <Text style={styles.subtitle}>
                        <Avatar rounded size='large' source={require('../assets/images/luau.jpg')} />
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
        textAlign: 'center',
        alignItems: 'center',
        // flex: 1,
    },
    tile: {
        minHeight: 100,
        backgroundColor: '#B8E7CA',
        borderColor: '#07607B',
        borderRadius: 10,
        borderWidth: 5,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    subtitle: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    thumbnail: {
        alignItems: 'center',
    }

});

export default AttractionsLanding;