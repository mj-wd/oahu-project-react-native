import React, { Component } from 'react';
import { View, Text } from 'react-native';

//This component to be like our Navbar from the React project

class Attractions extends Component {

    static navigationOptions = {
        title: 'Top Attractions According to Us'
    }

    render() {
        return (
            <View>
                <Text>
                    Beaches                    
                </Text>
                <Text>
                    Traditions
                </Text>
                <Text>
                    Sightseeing
                </Text>
                <Text>
                    Restaurants                  
                </Text>
                <Text>
                    Shopping                  
                </Text>
            </View>
        );
    }
}

export default Attractions;