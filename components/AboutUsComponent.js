import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AboutUs extends Component {

    static navigationOptions = {
        title: 'About Us & This App'
    }

    render() {
        return (
            <View>
                <Text>
                    Mark                    
                </Text>
                <Text>
                    Fredo
                </Text>
                <Text>
                    Zach
                </Text>
                <Text>
                    Readme                  
                </Text>
                <Text>
                    Citations                  
                </Text>
            </View>
        );
    }
}

export default AboutUs;