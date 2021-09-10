//by Mark
//Work in progress with the styling
import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default function Map() {
  return (
    <View style={styles.Container}>
      <MapView style={styles.Map} />
    </View>
  );
}

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
  });

// export default Map;