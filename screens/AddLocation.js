import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { AirbnbRating } from 'react-native-ratings'
import Styles from "../styles/Styles";

export default function LocationsScreen() {

  return (
    <View>
      <TextInput label='Location name' mode='outlined' />
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