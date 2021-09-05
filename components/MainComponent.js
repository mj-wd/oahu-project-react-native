import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
// see https://reactnavigation.org/docs/4.x/bottom-tab-navigator
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import Attractions from './AttractionsComponent';

const HomeNavigator = createBottomTabNavigator(
    {
        Home: { screen: Home }
    },
);

const AttractionsNavigator = createBottomTabNavigator(
    {
        Attractions: { screen: Attractions }
    },
);

const AboutUsNavigator = createBottomTabNavigator(
    {
        AboutUs: { screen: AboutUs }
    },
);

const AttractionsStack = createStackNavigator({
    Attractions: Attractions,
});

const MainNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeNavigator },
        Attractions: { screen: AttractionsNavigator },
        AboutUs: { screen: AboutUsNavigator }
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