import React, { Component } from 'react';
import { View, ScrollView, Image, Button } from 'react-native';
import { Card } from 'react-native-elements';

class Restaurants extends Component {
    
    static navigationOptions = {
        title: 'Restaurants'
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ScrollView>
                    <Card>
                        <Card.Title>A Pig and the Lady</Card.Title>
                        <Image
                            source={ require('./images/pig-and-the-lady.jpg') }
                            style={{ width: 250, height: 250 }}
                    />
                    </Card>
                    <Card>
                        <Card.Title>Helena's Hawaiian BBQ</Card.Title>
                        <Image
                            source={ require('./images/helenas.jpg') }
                            style={{ width: 250, height: 250 }}
                    />
                    </Card>
                    <Card>
                        <Card.Title>Ricado's Italian</Card.Title>
                        <Image
                            source={ require('./images/ricados.jpg') }
                            style={{ width: 250, height: 250 }}
                    />
                    </Card>
                    <Button title="Go to Shopping"
                    onPress={() => this.props.navigation.navigate('Shopping')} 
                    />
                    <Button title="Back to Menu"
                    onPress={() => this.props.navigation.navigate('AttractionsLanding')}
                    />
                </ScrollView>   
            </View>
        );
    }
}

export default Restaurants;