import { View } from "react-native";
import { Button, Divider, Icon, List, Text } from "react-native-paper";
import { AirbnbRating } from 'react-native-ratings';
import Styles from "../styles/Styles";
import { useContext } from "react";
import { LocationContext } from "../context/LocationContext";


export default function LocationsScreen() {

  const { location } = useContext(LocationContext)

  return (
    <View>
      {/* <List.Section style={Styles.listItem}>
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
              labelStyle={{ fontSize: 60 }}
            />
          </View>
        </View>
      </List.Section> */}

      <Divider />

      {location.name ? (
        <List.Section style={Styles.listItem}>
          <View style={Styles.listflex}>
            <List.Item
              title={location.name}
              titleStyle={{ fontSize: 50 }}
              description={
                <View style={Styles.starRating}>
                  <AirbnbRating
                    count={5}
                    defaultRating={location.rating}
                    size={30}
                    showRating={false}
                    isDisabled
                  />
                  <View style={Styles.textContainer}>
                    <Text>{location.description}</Text>
                  </View>
                </View>
              }
            />
            <View style={Styles.buttonContainer}>
              <Button
                mode="contained"
                icon="map-marker"
                contentStyle={Styles.listButton}
                labelStyle={{ fontSize: 60 }}
                onPress={() => console.log('Show on map')}
              />
            </View>
          </View>
        </List.Section>
      ) : null}
    </View>
  )
}