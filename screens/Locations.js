import { View } from "react-native";
import { Button, Icon, List, Text } from "react-native-paper";
import { AirbnbRating } from 'react-native-ratings';
import Styles from "../styles/Styles";


export default function LocationsScreen() {

  return (
    <View>
      <List.Section style={Styles.listItem}>
        <View style={Styles.listflex}>
          <List.Item
            title='Oulu'
            titleStyle={{ fontSize: 50 }}
            description={
              <View style={Styles.starRating}>
                <AirbnbRating
                  count={5}
                  defaultRating={4}
                  size={30}
                  showRating={false}
                  isDisabled
                />
                <View style={Styles.textContainer}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing.</Text>
                </View>
              </View>
            }
          />
          <View style={Styles.buttonContainer}>
          <Button
              mode="contained"
              icon="map-marker"
              contentStyle={Styles.listButton}
              labelStyle={{ fontSize: 60 }} // Adjust the icon size
            />
          </View>
        </View>
      </List.Section>

      <List.Section style={Styles.listItem}>
        <View style={Styles.listflex}>
          <List.Item
            title='Helsinki'
            titleStyle={{ fontSize: 50 }}
            description={
              <View style={Styles.starRating}>
                <AirbnbRating
                  count={5}
                  defaultRating={4}
                  size={30}
                  showRating={false}
                  isDisabled
                />
                <View style={Styles.textContainer}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing.</Text>
                </View>
              </View>
            }
          />
          <View style={Styles.buttonContainer}>
            <Button
              mode="contained"
              icon="map-marker"
              contentStyle={Styles.listButton}
              labelStyle={{ fontSize: 60 }} // Adjust the icon size
            />
          </View>
        </View>
      </List.Section>
    </View>
  )
}