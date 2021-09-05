import React, { Component } from 'react';
import { View } from 'react-native';
import Beaches from './BeachComponent';
import Restaurants from './RestaurantsComponent';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const AttractionComponents = createStackNavigator(
    {
        Beaches: { screen: Beaches },
        Restaurants: { screen: Restaurants },
    },
    {
        initialRouteName: 'Beaches',
    }
);

const StackNavigator = createAppContainer(AttractionComponents);

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