//by Fredo
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
// import { LinearGradient } from 'expo-linear-gradient';

class AttractionsLanding extends Component {
    
    static navigationOptions = {
        title: 'The Best of Oahu',
        // tabBarVisible: false,
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
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Beaches')}
                    activeOpacity='0'
                    underlayColor
                >
                    <Card containerStyle={styles.tile}>
                        <Text style={styles.subtitle}>
                        <Avatar rounded style={styles.thumb} size='medium' source={require('../assets/images/beach.jpg')} />
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
                        <Avatar rounded  size='medium' source={require('../assets/images/ricados.jpg')} />
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
                        <Avatar rounded size='medium' source={require('../assets/images/alamoana.jpg')} />
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
                        <Avatar rounded size='medium' source={require('../assets/images/pearl-harbor.jpg')} />
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
                        <Avatar rounded size='medium' source={require('../assets/images/luau.jpg')} />
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
    },
    tile: {
        minHeight: 90,
        backgroundColor: '#B8E7CA',
        borderColor: '#07607B',
        borderRadius: 10,
        borderWidth: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,
    },
    thumb: {
        flex: 1,
        width: 60,
        height: 60,
    }

});

export default AttractionsLanding;