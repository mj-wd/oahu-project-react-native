import React, { Component } from 'react'; 
import { StyleSheet, Text, Image, View, Alert, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

import { RESTAURANTS } from '../shared/restaurants';
 
class Restaurants extends Component {
 
    static navigationOptions = {
        title: 'Restaurants'
    }
                
    constructor() { 
        super(); 
        this.objArr = RESTAURANTS
    }
 
    showArrayItem = (item) => { 
        Alert.alert(item); 
    }
 
    render() { 
        return (
            <ScrollView style={styles.MainContainer}>
                
                {
                    this.objArr.map((item, key) => (        
                        <TouchableOpacity key={key} onPress={this.showArrayItem.bind(this, item.name)}>
                            <Card 
                                featuredTitle={item.name}
                                // image={{ uri: item.image }}
                                image={{ uri: './images/ricados.jpg'}}                                
                            >
                                <Text style={styles.TextStyle}>{item.description}</Text> 
                                <Text style={styles.TextStyle}>Source: {item.source}</Text> 
                                <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />
                            </Card>
                        </TouchableOpacity> 
                    ))
                } 
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    margin: 2,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
 
  },
 
  TextStyle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left'
  }
 
});

export default Restaurants;
