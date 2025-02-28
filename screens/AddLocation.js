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
  const [loc, setLoc] = useState(null)
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(()=>{
    getLocation()
    async function getLocation(){
      let {status} = await Location.requestForegroundPermissionsAsync()

      if(status !== 'granted'){
        console.log('Geolocation failed. No permisson granted!')        
        return
      }

      const location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Lowest})
      setLoc({lat: location.coords.latitude, lon: location.coords.longitude})
    }
  },[])

  console.log('*** ', loc?.lat)
  

  return (
    <View>
      <TextInput 
        value={place}
        onChangeText={setPlace}
        label='Location name' 
        mode='outlined' 
      />
      <TextInput label='Location description' mode='outlined' />
      <View>
        <View>
          <AirbnbRating
            count={5}
            defaultRating={4}
            size={50}
            showRating={false}
            onFinishRating={(rating) => console.log("Selected rating:", rating)}
          />
        </View>
      </View>
      <Button mode='contained'>Add Location</Button>
    </View>
  )
}