import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Restaurants extends Component {
    
    static navigationOptions = {
        title: 'Restaurants'
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants                     Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants                       Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants                       Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants                       Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants                       Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants                       Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants                       Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants                       Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants                       Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants                       Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants                       Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants                       Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants                       Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants Restaurants                 
                </Text>
                {/* <Button
                    title="Beaches"
                    onPress={() => this.props.navigation.navigate('Beaches')}
                /> */}
                <Button
                    title="Siteseeing"
                    onPress={() => this.props.navigation.navigate('Siteseeing')}
                />
                <Button
                    title="Traditions"
                    onPress={() => this.props.navigation.navigate('Traditions')}
                />
                <Button
                    title="Shopping"
                    onPress={() => this.props.navigation.navigate('Shopping')}
                />
            </View>
        );
    }
}

export default Restaurants;