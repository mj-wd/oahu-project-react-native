import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Siteseeing extends Component {
    
    static navigationOptions = {
        title: 'Siteseeing'
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing Siteseeing                 
                </Text>
                {/* <Button
                    title="Beaches"
                    onPress={() => this.props.navigation.navigate('Beaches')}
                /> */}
                <Button
                    title="Restaurants"
                    onPress={() => this.props.navigation.navigate('Restaurants')}
                />
                <Button
                    title="Shopping"
                    onPress={() => this.props.navigation.navigate('Shopping')}
                />
                <Button
                    title="Traditions"
                    onPress={() => this.props.navigation.navigate('Traditions')}
                />
            </View>
        );
    }
}

export default Siteseeing;