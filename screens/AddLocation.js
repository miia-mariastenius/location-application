import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';
import { useState } from "react";
import { Alert, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { AirbnbRating } from 'react-native-ratings';
import { addLocation } from "../firebase/FirestoreController";
import Styles, { MyTheme } from "../styles/Styles";

export default function AddLocation() {

  const [place, setPlace] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState(4)

  const navigation = useNavigation()

  async function searchAndAddLocation() {

    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      console.log('Geolocation failed. No permisson granted!')
      return
    }

    let coords = await Location.geocodeAsync(place)

    if (coords.length > 0) {
      const { latitude, longitude } = coords[0]

      try {
        await addLocation({ name: place, description, rating, latitude, longitude })
        console.log("Location added to Firestore!")

        navigation.reset({
          index: 0,
          routes: [{ name: "Locations" }],
        })

      } catch (error) {
        console.error("Error adding location:", error)
        Alert.alert("Error", "Failed to add location.")
      }
    } else {
      Alert.alert("Location not found!")
    }
  }


  return (
    <View style={{ flex: 1, backgroundColor: MyTheme.colors.background }}>
      <View style={Styles.locationForm}>
        <TextInput
          value={place}
          onChangeText={setPlace}
          label='Location name'
          mode='outlined'
          style={Styles.formInputs}
          theme={{ roundness: 10 }}
        />
        <TextInput
          value={description}
          onChangeText={setDescription}
          label='Location description'
          mode='outlined' 
          style={Styles.formInputs}
          theme={{ roundness: 10 }}
        />
        <View>
          <View>
            <AirbnbRating
              count={5}
              defaultRating={rating}
              size={50}
              showRating={false}
              selectedColor="#000"
              onFinishRating={(newRating) => setRating(newRating)}
            />
          </View>
        </View>
        <Button mode='contained' onPress={searchAndAddLocation} style={Styles.formButton}>
          Add Location
        </Button>
      </View>
    </View>
  )
}