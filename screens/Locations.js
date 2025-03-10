import { ScrollView, View } from "react-native";
import { Button, Divider, Icon, IconButton, List, Text } from "react-native-paper";
import { AirbnbRating } from 'react-native-ratings';
import Styles, { MyTheme } from "../styles/Styles";
import { useContext } from "react";
import { LocationContext } from "../context/LocationContext";
import { useNavigation } from "@react-navigation/native";


export default function LocationsScreen() {

  const { locations } = useContext(LocationContext)
  const navigation = useNavigation()

  const showOnMap = (location) => {
    navigation.navigate('Map', { location })
  }

  return (
    <View style={{ flex: 1, backgroundColor: MyTheme.colors.background }}>
      <ScrollView>
        {locations.map((location, index) => (
          <List.Section key={index} style={Styles.listItem}>
            <View style={Styles.listflex}>
              <List.Item
                title={location.name}
                titleStyle={Styles.listTitle}
                description={
                  <View style={Styles.starRating}>
                    <AirbnbRating
                      count={5}
                      defaultRating={location.rating}
                      size={20}
                      showRating={false}
                      selectedColor="#000"
                      isDisabled
                    />
                    <View style={Styles.textContainer}>
                      <Text>{location.description}</Text>
                    </View>
                  </View>
                }
              />
              <View style={Styles.buttonContainer}>
                <IconButton
                  icon="map-marker"
                  iconColor="#E52E2C"
                  size={70}
                  onPress={() => showOnMap(location)}
                  style={Styles.listButton}
                />
              </View>
              <Divider />
            </View>
          </List.Section>
        ))}
      </ScrollView>
    </View>
  )
}