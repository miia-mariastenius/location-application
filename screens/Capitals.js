import { ScrollView, View } from "react-native";
import { List, Text, TextInput } from "react-native-paper";
import Styles from "../styles/Styles";
import { useState } from "react";

export default function LocationsScreen() {

  const [inputText, setInputText] = useState('')

  return (
    <View>
      <TextInput
        value={inputText}
        onChangeText={inputText => setText(inputText)}
        label="Country or capital"
        left={<TextInput.Icon icon="magnify" />}
        style={Styles.searchInput}
      />
      <ScrollView>
        <List.Section style={Styles.listItem}>
          <View style={Styles.listflex}>
            <List.Item
              title="Albania"
              description="Tirana"
              left={() => <List.Icon icon="folder" />}
            />
          </View>
        </List.Section>
      </ScrollView>
    </View>
  )
}