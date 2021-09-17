//by Fredo
import React, { Component } from 'react';
import { View } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import AttractionsLanding from './AttractionsLandingComponent';
import Beaches from './BeachesComponent';
import Restaurants from './RestaurantsComponent';
import Shopping from './ShoppingComponent';
import Sightseeing from './SightseeingComponent';
import Traditions from './TraditionsComponent';


const StackNavigator = createStackNavigator({
    AttractionsLanding: { screen: AttractionsLanding },
    Beaches: { screen: Beaches },
    Restaurants: { screen: Restaurants },
    Shopping: { screen: Shopping },
    Sightseeing: { screen: Sightseeing },
    Traditions: { screen: Traditions },

});

const AttractionsNavigator = createAppContainer(StackNavigator);

class Attractions extends Component {

    static navigationOptions = {
        tabBarVisible: false
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AttractionsNavigator />
            </View>
        );
    }
};

export default Attractions;