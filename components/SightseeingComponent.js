//by Mark
import React, { Component } from 'react'; 
import { StyleSheet, Text, View, Alert, ScrollView, TouchableOpacity, Linking  } from 'react-native';
import { Card, Icon } from 'react-native-elements';

import { SIGHTSEEING } from '../shared/sightseeing';
import { baseUrl } from '../shared/baseUrl';

//color scheme: https://www.schemecolor.com/hawaiian-island.php
class Sightseeing extends Component {
 
    static navigationOptions = {
        title: 'Best Sightseeing',
        headerStyle :{
            backgroundColor: '#07607B',
            height: 90,
            paddingTop: 45
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff',
            textShadowRadius: 5,
            textShadowColor: '#000'
        }
    };
                    
    constructor() { 
        super(); 
        this.objArr = SIGHTSEEING
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
                        color='#d24375'
                        raised
                        reverse
                    />
                    <Icon
                        alignSelf='flex-end'
                        onPress={() => this.props.navigation.navigate('Traditions')}
                        name='leaf'
                        type='font-awesome'
                        color='#d24375'
                        raised
                        reverse
                    />
                </View>
                {
                    this.objArr.map((item, key) => (        
                        <TouchableOpacity key={key} onPress={()=> Linking.openURL(item.citationLink)}>
                            <Card 
                                containerStyle={styles.InfoCard}
                                featuredTitle={item.name}
                                image={{ uri: baseUrl + item.photo }}
                            >       
                                <Text>{item.description}</Text> 
                                <Text style={styles.SourceStyle}>{"\n"}Source: {item.source}</Text> 
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
    backgroundColor: '#4EACB8'
  },
  InfoCard: {
    backgroundColor: '#F6F1D2'
  }, 
  SourceStyle: {
    fontWeight: 'bold'
  },
});

export default Sightseeing;
