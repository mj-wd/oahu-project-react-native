import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Shopping extends Component {
    
    static navigationOptions = {
        title: 'Shopping'
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping                 
                </Text>
                <Button title="Go to Siteseeing"
                onPress={() => this.props.navigation.navigate('Siteseeing')}
                />
                <Button title="Back to Menu"
                onPress={() => this.props.navigation.navigate('AttractionsLanding')}
                />   
            </View>
        );
    }
}

export default Shopping;