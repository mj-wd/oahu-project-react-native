import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
// see https://reactnavigation.org/docs/4.x/bottom-tab-navigator
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';

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

const MainNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeNavigator },
        AboutUs: { screen: AboutUsNavigator },
    },
);

const TabNavigator = createAppContainer(MainNavigator)

class Main extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                // paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
                <TabNavigator />
            </View>
        );
    }
}

export default Main;