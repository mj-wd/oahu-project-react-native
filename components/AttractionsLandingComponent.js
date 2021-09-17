//by Fredo
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

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
                <Card containerStyle={styles.tile}>
                    <Button 
                        title="Beaches"
                        raised={true}
                        onPress={() => this.props.navigation.navigate('Beaches')}
                        ViewComponent={LinearGradient}
                        linearGradientProps={{colors: ['#07607B', '#4EACB8']}}
                    />
                </Card>
                <Card containerStyle={styles.tile}>
                    <Button title="Restaurants"
                        raised={true}
                        onPress={() => this.props.navigation.navigate('Restaurants')}
                        ViewComponent={LinearGradient}
                        linearGradientProps={{colors: ['#07607B', '#4EACB8']}}
                    />
                </Card>
                <Card containerStyle={styles.tile}>
                    <Button title="Shopping"
                        raised={true}
                        onPress={() => this.props.navigation.navigate('Shopping')}
                        ViewComponent={LinearGradient}
                        linearGradientProps={{colors: ['#07607B', '#4EACB8']}}
                    />
                </Card>
                <Card containerStyle={styles.tile}>
                    <Button title="Sightseeing"
                        raised={true}
                        onPress={() => this.props.navigation.navigate('Sightseeing')}
                        ViewComponent={LinearGradient}
                        linearGradientProps={{colors: ['#07607B', '#4EACB8']}}
                    />
                </Card>
                <Card containerStyle={styles.tile}>
                    <Button title="Traditions"
                        raised={true}
                        onPress={() => this.props.navigation.navigate('Traditions')}
                        ViewComponent={LinearGradient}
                        linearGradientProps={{colors: ['#07607B', '#4EACB8']}}
                    />
                </Card>
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