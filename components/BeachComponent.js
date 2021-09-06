import React from 'react';
import { Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';

function Beaches(props) {

    const renderBeachItem = ({item}) => {
        return (
            //ListItem to make dynamic images work???
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Card
                    featuredTitle={item.name}
                    image={require('./images/waimea-bay.jpg')}
                    // image={require(item.image)}
                >
                    <Text>{item.description}</Text>
                </Card>
                <Button
                    title="Restaurants"
                    onPress={() => this.props.navigation.navigate('Restaurants')}
                />
                <Button
                    title="Shopping"
                    onPress={() => this.props.navigation.navigate('Shopping')}
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