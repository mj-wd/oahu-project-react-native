import React from 'react';
import { Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';

function Directory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/waimea-bay.jpg')}
                // image={require(item.image)}
            >
                <Text>{item.description}</Text>
            </Card>
        );
    };

    return (
        <FlatList
            data={props.beaches}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Directory;