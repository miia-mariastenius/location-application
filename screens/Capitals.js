import { Image, ScrollView, View } from "react-native";
import { Divider, List, Text, TextInput } from "react-native-paper";
import Styles, { MyTheme } from "../styles/Styles";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LocationsScreen() {

  const [inputText, setInputText] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    fetchCountries()
  }, [])

  async function fetchCountries() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all")
      setCountries(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  function filterCountries(keyword) {
    setInputText(keyword)
    if (!keyword) {
      setFilteredCountries([])
      return
    }

    const lowerKeyword = keyword.toLowerCase()
    const results = countries.filter(
      (c) => c.name.common.toLowerCase().includes(lowerKeyword) || (c.capital && c.capital[0].toLowerCase().includes(lowerKeyword))
    )

    setFilteredCountries(results)
  }


  return (
    <View style={{ flex: 1, backgroundColor: MyTheme.colors.background }}>
      <TextInput
        value={inputText}
        onChangeText={filterCountries}
        placeholder="Country or capital"
        left={<TextInput.Icon icon="magnify" />}
        mode='outlined'
        style={Styles.searchInput}
        theme={{ roundness: 10 }}
      />
      <ScrollView>
        {filteredCountries.map((country, index) => (
          <View>
            {index < filteredCountries.length - 1 && (<Divider />)}
            <List.Section key={index} style={Styles.listItem}>
              <View style={Styles.listflex}>
                <List.Item
                  title={country.name.common}
                  description={country.capital ? country.capital[0] : "No capital"}
                  left={() => (
                    <Image
                      source={{ uri: country.flags.png }}
                      style={{ width: 60, height: 40, marginLeft: 10 }}
                    />
                  )}
                />
              </View>
            </List.Section>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}