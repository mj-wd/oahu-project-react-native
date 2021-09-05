import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
// see https://reactnavigation.org/docs/4.x/bottom-tab-navigator
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import Attractions from './AttractionsComponent';

const HomeNavigator = createBottomTabNavigator(
    {
        Home: { screen: Home }
    },
);

const AboutUsNavigator = createBottomTabNavigator(
    {
        AboutUs: { screen: AboutUs }
    },
);

const AttractionsNavigator = createBottomTabNavigator(
    {
        Attractions: { screen: Attractions }
    },
);

const MainNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeNavigator },
        AboutUs: { screen: AboutUsNavigator },
        Attractions: { screen: AttractionsNavigator },
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