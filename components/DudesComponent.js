//by Zach
import React, { Component } from 'react';
import { View } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import About from './AboutComponent';
import Zach from './ZachComponent';
import Mark from './MarkComponent';
import Fredo from './FredoComponent';

const StackNavigator = createStackNavigator({
    About: {screen: About},
    Mark: {screen: Mark},
    Fredo: {screen: Fredo},
    Zach: {screen: Zach}
});

const DudesNavigator = createAppContainer(StackNavigator);

class Dudes extends Component {

    static navigationOptions = {
        tabBarVisible: false
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <DudesNavigator />
            </View>
        );
    }
};

export default Dudes;