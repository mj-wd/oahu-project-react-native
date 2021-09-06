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
                {/* <Button
                    title="Beaches"
                    onPress={() => this.props.navigation.navigate('Beaches')}
                /> */}
                <Button
                    title="Restaurants"
                    onPress={() => this.props.navigation.navigate('Restaurants')}
                />
                <Button
                    title="Shopping"
                    onPress={() => this.props.navigation.navigate('Traditions')}
                />
                <Button
                    title="Siteseeing"
                    onPress={() => this.props.navigation.navigate('Siteseeing')}
                />
            </View>
        );
    }
}

export default Traditions;