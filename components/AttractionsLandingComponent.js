//by Fredo
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
                    <Text style={styles.subtitle}>
                        Beaches
                    </Text>
                    <Button title="Go"
                        raised={true}
                        onPress={() => this.props.navigation.navigate('Beaches')}
                        ViewComponent={LinearGradient}
                        linearGradientProps={{colors: ['#07607B', '#4EACB8']}}
                    />
                </Card>
                <Card containerStyle={styles.tile}>
                    <Text style={styles.subtitle}>
                        Restaurants
                    </Text>
                    <Button title="Go"
                        raised={true}
                        onPress={() => this.props.navigation.navigate('Restaurants')}
                        ViewComponent={LinearGradient}
                        linearGradientProps={{colors: ['#07607B', '#4EACB8']}}
                    />
                </Card>
                <Card containerStyle={styles.tile}>
                    <Text style={styles.subtitle}>
                        Shopping
                    </Text>
                    <Button title="Go"
                        raised={true}
                        onPress={() => this.props.navigation.navigate('Shopping')}
                        ViewComponent={LinearGradient}
                        linearGradientProps={{colors: ['#07607B', '#4EACB8']}}
                    />
                </Card>
                <Card containerStyle={styles.tile}>
                    <Text style={styles.subtitle}>
                        Sightseeing
                    </Text>
                    <Button title="Go"
                        raised={true}
                        onPress={() => this.props.navigation.navigate('Sightseeing')}
                        ViewComponent={LinearGradient}
                        linearGradientProps={{colors: ['#07607B', '#4EACB8']}}
                    />
                </Card>
                <Card containerStyle={styles.tile}>
                    <Text style={styles.subtitle}>
                        Traditions
                    </Text>
                    <Button title="Go"
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
        borderColor: '#ededed',
        borderRadius: 5,
        borderWidth: 1,
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

});

export default AttractionsLanding;