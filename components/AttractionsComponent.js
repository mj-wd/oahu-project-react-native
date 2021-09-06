import React, { Component } from 'react';
import { View } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// import Beaches from './BeachComponent';
// import Beaches from './BeachComponent';
import Restaurants from './RestaurantsComponent';
import Shopping from './ShoppingComponent';
import Siteseeing from './Siteseeing';
import Traditions from './TraditionsComponent';

const StackNavigator = createAppContainer(createStackNavigator(
    {
        // Beaches: Beaches,
        Restaurants: Restaurants,
        Shopping: Shopping,
        Siteseeing: Siteseeing,
        Traditions: Traditions,
    },
));

class Attractions extends Component {
    render() {
        return (
            <View style={{ flex: 1 , alignItems: 'center', justifyContent: 'center'}}>
                <StackNavigator />
            </View>
        );
    }
}

export default Attractions;