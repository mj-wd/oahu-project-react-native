import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class AttractionsLanding extends Component {
    
    static navigationOptions = {
        title: 'The Best of Oauhu'
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                 ******Turn Buttons into Something Graphically Significant for Each Attraction Page---maybe using tiles?*****
                </Text>
                {/* <Button title="Go to Beaches"
                onPress={() => this.props.navigation.navigate('Beaches')} 
                /> */}
                <Button title="Go to Restaurants"
                onPress={() => this.props.navigation.navigate('Restaurants')}
                />       
                <Button title="Go to Shopping"
                onPress={() => this.props.navigation.navigate('Shopping')} 
                />
                <Button title="Go to Siteseeing"
                onPress={() => this.props.navigation.navigate('Siteseeing')}
                />
                <Button title="Go to Traditions"
                onPress={() => this.props.navigation.navigate('Traditions')}
                />
            </View>
        );
    }
}

export default AttractionsLanding;