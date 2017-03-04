import React from 'react'
import MapView from 'react-native-maps';

import { View } from 'react-native'

import styles from './styles'

const marker = {
  latlng: {
    latitude: 49.2634011,
    longitude: -123.1382246,
  }
}
const Maps = () => {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: marker.latlng.latitude,
          longitude: marker.latlng.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.005,
        }}
      >
        <MapView.Marker
          coordinate={marker.latlng}
          image={require('../../assets/img/map_pin.png')}
        />
      </MapView>
    </View>
  )
}

export default Maps