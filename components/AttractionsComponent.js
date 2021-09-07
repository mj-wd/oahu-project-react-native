import React, { Component } from 'react';
import { View } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//Beaches component is bummed out; it won't work with the stack navigator. IDK why
import AttractionsLanding from './AttractionsLandingComponent';
import Beaches from './BeachComponent';
import Restaurants from './RestaurantsComponent';
import Shopping from './ShoppingComponent';
import Siteseeing from './Siteseeing';
import Traditions from './TraditionsComponent';

const StackNavigator = createStackNavigator({
    AttractionsLanding: { screen: AttractionsLanding },
    Beaches: { screen: Beaches },
    Restaurants: { screen: Restaurants },
    Shopping: { screen: Shopping },
    Siteseeing: { screen: Siteseeing },
    Traditions: { screen: Traditions },
});

const AttractionsNavigator = createAppContainer(StackNavigator);

class Attractions extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AttractionsNavigator />
            </View>
        );
    }
};

export default Attractions;