//by Mark
import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import MapView, { Callout, Marker } from 'react-native-maps';

import { MAPMARKERS } from '../shared/mapmarkers';
import { baseUrl } from '../shared/baseUrl'; 

class Map extends Component {

  static navigationOptions = {
      title: 'Map',
      tabBarVisible: false
  }

  constructor() { 
    super(); 
    this.objArr = MAPMARKERS
  };

  render() {
    return (
        <MapView 
          style={styles.Map} 
          region={{
              latitude: 21.48295403007236,
              longitude: -157.9608539034392,    
              latitudeDelta: 1.2,
              longitudeDelta: 0.6
          }}
        >
          {
            this.objArr.map((item, key) => (        
              <Marker
                key={key}
                coordinate={{
                  latitude: item.latitude, 
                  longitude: item.longitude
                }}
              >
                <Icon
                  alignSelf='flex-end'
                  name={item.icon}
                  type='font-awesome'
                  color={item.iconColor}
                  size={11}
                  raised
                  reverse
                />
                <Callout style={styles.Callout}>
                  <Text style={{ fontSize: 15 }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    latitude: {item.latitude}
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    longitude: {item.longitude}
                  </Text>
                </Callout>
              </Marker> 
            ))
          }
        </MapView>
    );
  };
};

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    Callout: {
      position: 'absolute', 
      minWidth: 200, 
      minHeight: 100,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default Map;