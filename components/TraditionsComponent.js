import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Traditions extends Component {

    static navigationOptions = {
        title: 'Traditions'
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions Traditions           
                </Text>
                <Button title="Back to Menu"
                onPress={() => this.props.navigation.navigate('AttractionsLanding')}
                />              
            </View>
        );
    }
}

export default Traditions;