//by Mark
import * as React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

// export default Class MapMarkers extends React.Component {
//     state = {
//         coordinates: [
//             {name: 'ricados', latitude: '', longitude: ''}
//         ]
//     }

// };

export default function Map() {
  return (
    <View style={styles.Container}>
      <MapView style={styles.Map} 
        region={{
            latitude: 21.48295403007236,
            longitude: -157.9608539034392,    
            latitudeDelta: 1.2,
            longitudeDelta: 0.6
        }}
      />
    </View>
  );
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
  });

// export default Map;