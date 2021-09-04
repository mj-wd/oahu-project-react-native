import React from 'react';
import { Text, FlatList } from 'react-native';
import { Card, Image } from 'react-native-elements';

function Directory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <Card>
                <Card.Title>{item.name}</Card.Title>
                <Text>{item.description}</Text>            
                <Image
                    resizeMode="cover"            
                    source={{ uri: item.image }}          
                />
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