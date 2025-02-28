import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { AirbnbRating } from 'react-native-ratings'
import Styles from "../styles/Styles";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context/LocationContext";
import * as Location from 'expo-location'

export default function LocationsScreen() {

  const [place, setPlace] = useState('')
  const [description, setDescription] = useState('')
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [rating, setRating] = useState(4)

  const { setLocation } = useContext(LocationContext)

  useEffect(() => {
    getLocation()
    async function getLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        console.log('Geolocation failed. No permisson granted!')
        return
      }

      const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Lowest })
      setLatitude(location.coords.latitude)
      setLongitude(location.coords.longitude)
      setLocation({ lat: location.coords.latitude, lon: location.coords.longitude })
    }
  }, [])

  async function search() {
    let coords = await Location.geocodeAsync(place)
    if (coords[0]) {
      setLatitude(coords[0].latitude)
      setLongitude(coords[0].longitude)
      setLocation({ name: place, description, rating, coords: { lat: coords[0].latitude, lon: coords[0].longitude } })

    } else {
      Alert.alert('Location not found!')
    }
  }

  console.log('*** ', latitude, longitude);

  return (
    <View>
      <TextInput
        value={place}
        onChangeText={setPlace}
        label='Location name'
        mode='outlined'
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        label='Location description'
        mode='outlined' />
      <View>
        <View>
          <AirbnbRating
            count={5}
            defaultRating={rating}
            size={50}
            showRating={false}
            onFinishRating={(rating) => setRating(rating)}
          />
        </View>
      </View>
      <Button mode='contained' onPress={search}>Add Location</Button>
    </View>
  )
}