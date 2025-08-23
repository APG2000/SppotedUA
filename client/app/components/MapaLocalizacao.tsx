import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapaLocalizacao() {
  
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permissão à localização negada');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      console.log(loc)
      setLocation(loc.coords);
      setLoading(false);
    })();
  }, []);

    if (Platform.OS === 'web') {
    return <Text>Mapa não disponível na web.</Text>;
  }
  
  if (loading || !location) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>A obter localização...</Text>
      </View>
    );
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        title="Estás aqui"
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
