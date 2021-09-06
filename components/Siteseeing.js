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
                <Button title="Go to Traditions"
                onPress={() => this.props.navigation.navigate('Traditions')}
                />
                <Button title="Back to Menu"
                onPress={() => this.props.navigation.navigate('AttractionsLanding')}
                />         
            </View>
        );
    }
}

export default Siteseeing;