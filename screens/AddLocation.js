import { Alert, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { AirbnbRating } from 'react-native-ratings'
import Styles from "../styles/Styles";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context/LocationContext";
import * as Location from 'expo-location'
import { useNavigation } from "@react-navigation/native";
import { addLocation } from "../firebase/FirestoreController";

export default function AddLocation() {

  const [place, setPlace] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState(4)

  const navigation = useNavigation()

  async function searchAndAddLocation() {
    let coords = await Location.geocodeAsync(place);
    if (coords.length > 0) {
      const { latitude, longitude } = coords[0];
  
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
            selectedColor="#000"
            onFinishRating={(newRating) => setRating(newRating)}
          />
        </View>
      </View>
      <Button mode='contained' onPress={searchAndAddLocation}>
        Add Location
      </Button>
    </View>
  )
}