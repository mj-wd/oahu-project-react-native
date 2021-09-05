import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import Home from './HomeComponent';

class Main extends Component {
    render() {
        return (            
            <View>
                <Header>
                    <Text>Welcome to Oahu</Text>
                </Header>
                <Home />
            </View>
        );
    }
}

export default Main;