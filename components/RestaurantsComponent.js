import React, { Component } from 'react'; 
import { StyleSheet, Text, View, Alert, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import Constants from 'expo-constants';

import { RESTAURANTS } from '../shared/restaurants';

//color scheme: https://www.schemecolor.com/hawaiian-island.php
class Restaurants extends Component {
 
    static navigationOptions = {
        title: 'Restaurants',
        headerStyle :{
            backgroundColor: '#07607B',
            height: 90,
            paddingTop: 45
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    };
                    
    constructor() { 
        super(); 
        this.objArr = RESTAURANTS
    };
 
    showArrayItem = (item) => { 
        Alert.alert(item); 
    };
 
    render() { 
        return (            
            <ScrollView style={styles.MainContainer}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Icon
                        onPress={() => this.props.navigation.navigate('AttractionsLanding')}
                        name='bars'
                        type='font-awesome'
                        color='#f50'
                        raised
                        reverse
                    />
                    <Icon
                        alignSelf='flex-end'
                        onPress={() => this.props.navigation.navigate('Shopping')}
                        name='shopping-cart'
                        type='font-awesome'
                        color='#f50'
                        raised
                        reverse
                    />
                </View>
                {
                    this.objArr.map((item, key) => (        
                        <TouchableOpacity key={key} onPress={this.showArrayItem.bind(this, item.name)}>
                            <Card
                                featuredTitle={item.name}
                                // image={item.image}
                                image={require('./images/ricados.jpg')}                
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
    };
};
 
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    margin: 0,
    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    backgroundColor: '#4EACB8'
  }, 
  TextStyle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left'
  },
});

export default Restaurants;
