import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Beach from './BeachComponent';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const AttractionComponents = createStackNavigator(
    {
        Beach: { screen: Beach },
    }, 
);

const StackNavigator  = createAppContainer(AttractionComponents);

class Attractions extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StackNavigator />
            </View>
        );
    }
}

export default Attractions;