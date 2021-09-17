//by Zach
import React, { Component } from 'react';
import { View } from 'react-native';

import { createAppContainer } from 'react-navigation';
// see https://reactnavigation.org/docs/4.x/bottom-tab-navigator
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './HomeComponent';
import Map from './MapComponent';
import Attractions from './AttractionsComponent';
import { Icon } from 'react-native-elements';
import Dudes from './DudesComponent';

const HomeNavigator = createBottomTabNavigator(
    {
        Home: { screen: Home }
    },
);

const AttractionsNavigator = createBottomTabNavigator(
    {
        Attractions: { screen: Attractions }
        //add button to go back to TabNav 
    },
);

const MapNavigator = createBottomTabNavigator(
    {
        Map: { screen: Map }
    },
);

const AboutNavigator = createBottomTabNavigator(
    {
        About: { screen: Dudes }
    },
);

const TabNavNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeNavigator,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon 
                        name='home'
                        type='font-awesome'
                        color= {tintColor}
                        />  
                    </View>)  
            }
        },
        Attractions: { screen: AttractionsNavigator,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon 
                        name='bullhorn'
                        type='font-awesome'
                        color= {tintColor}
                        />  
                    </View>)  
            } },
        Map: { screen: MapNavigator,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon 
                        name='map-o'
                        type='font-awesome'
                        color= {tintColor}
                        />  
                    </View>)  
            } },
        About: { screen: AboutNavigator,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon 
                        name='user-o'
                        type='font-awesome'
                        color= {tintColor}
                        />  
                    </View>)  
            } }
    },
    {
        tabBarOptions: {
            activeBackgroundColor: '#07607B',
            inactiveBackgroundColor: '#F6F1D2',
            activeTintColor: '#fff',
            inactiveTintColor: '#d24375',
            labelStyle: {fontSize:15, color: 'black', fontWeight: 'bold'},
        }
    }
);

const TabNavigator = createAppContainer(TabNavNavigator)

class TabNav extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TabNavigator />
            </View>
        );
    }
}

export default TabNav;