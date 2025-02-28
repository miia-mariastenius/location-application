import { View } from "react-native";
import MapView from "react-native-maps";
import { Text } from "react-native-paper";
import Styles from "../styles/Styles";
import { useContext } from "react";
import { LocationContext } from "../context/LocationContext";

export default function LocationsScreen() {

  const { location } = useContext(LocationContext)

  return (
    <View style={Styles.container}>
      <MapView
        style={Styles.map}
        region={{
          latitude: location?.lat,
          longitude: location?.lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      {/* {location ? (
        <Text>Latitude: {location.lat}, Longitude: {location.lon}</Text>
      ) : (
        <Text>No location data available</Text>
      )} */}
    </View>
  )
}