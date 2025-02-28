import { View } from "react-native";
import MapView from "react-native-maps";
import Styles from "../styles/Styles";
import { useContext } from "react";
import { LocationContext } from "../context/LocationContext";
import { useRoute } from "@react-navigation/native";

export default function LocationsScreen() {

  const route = useRoute()
  const location = route.params?.location || {
    name: 'Helsinki',
    description: 'Default location',
    coords: { lat: 60.1699, lon: 24.9384 }
  }

  return (
    <View style={Styles.container}>
      <MapView
        style={Styles.map}
        region={{
          latitude: location.coords.lat,
          longitude: location.coords.lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}