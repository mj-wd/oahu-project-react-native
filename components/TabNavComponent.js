//by Zach
import React, { Component } from 'react';
import { View } from 'react-native';

import { createAppContainer } from 'react-navigation';
// see https://reactnavigation.org/docs/4.x/bottom-tab-navigator
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './HomeComponent';
import About from './AboutComponent';
import Map from './MapComponent';
import Attractions from './AttractionsComponent';

const HomeNavigator = createBottomTabNavigator(
    {
        Home: { screen: Home }
    },
);

const AttractionsNavigator = createBottomTabNavigator(
    {
        Attractions: { screen: Attractions }
        //add button to go back to main 
    },
);

const MapNavigator = createBottomTabNavigator(
    {
        Map: { screen: Map }
    },
);

const AboutNavigator = createBottomTabNavigator(
    {
        About: { screen: About }
    },
);

const MainNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeNavigator },
        Attractions: { screen: AttractionsNavigator },
        Map: { screen: MapNavigator },
        About: { screen: AboutNavigator }
    },
);

const TabNavigator = createAppContainer(MainNavigator)

class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TabNavigator />
            </View>
        );
    }
}

export default Main;