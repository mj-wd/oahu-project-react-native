import React from 'react';
import { Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';

function Directory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <Card>
                <Card.Title>{item.name}</Card.Title>
                {/* IMAGE DOESN'T WORK!!!!!!!!!!!!!!!!!! */}
                <Card.Image
                    source={{ uri: item.image }}
                    style={{ width: 400, height: 200 }}
                    resizeMode="cover"                      
                />
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