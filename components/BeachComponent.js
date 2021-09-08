//by Mark

import React from 'react';
import { Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

function Beaches(props) {

    const renderBeachItem = ({item}) => {
        return (
            //ListItem to make dynamic images work???
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Card>
                    <ListItem 
                        featuredTitle={item.name}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        subtitle={item.description}
                        // image={require(item.image)}
                    />
                    {/* <Text>{item.description}</Text> */}
                </Card>
                <Button title="Go to Restaurants"
                onPress={() => this.props.navigation.navigate('Restaurants')}
                />
                <Button title="Back to Menu"
                onPress={() => this.props.navigation.navigate('AttractionsLanding')}
                />            
            </View>
        );
    };

    return (
        <FlatList
            data={props.beaches}
            renderItem={renderBeachItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Beaches;