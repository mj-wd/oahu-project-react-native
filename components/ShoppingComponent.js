import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Shopping extends Component {
    
    static navigationOptions = {
        title: 'Shopping'
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping Shopping                 
                </Text>
                {/* <Button
                    title="Beaches"
                    onPress={() => this.props.navigation.navigate('Beaches')}
                /> */}
                <Button
                    title="Restaurants"
                    onPress={() => this.props.navigation.navigate('Restaurants')}
                />
                <Button
                    title="Siteseeing"
                    onPress={() => this.props.navigation.navigate('Siteseeing')}
                />
                <Button
                    title="Traditions"
                    onPress={() => this.props.navigation.navigate('Traditions')}
                />
            </View>
        );
    }
}

export default Shopping;