//by Zach
import React, { Component } from 'react';
import { View, Text } from 'react-native';

//This component is to be like our React footer component plus I thought it would be nice to add about us, the developers and a bit about the project too.

class About extends Component {

    static navigationOptions = {
        title: 'About Us & This App',
        tabBarVisible: false
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
                    Citations: All words contained in quotes and all photos have been borrowed from other websites. All work by others has been properly cited with links. Give them props.                  
                </Text>
                <Text>
                    *******INSERT SOCIAL MEDIA LINKS AND CONTACT INFO FOR GO HAWAII FROM OUR REACT PROJECT HERE*******             
                </Text>
            </View>
        );
    }
}

export default About;