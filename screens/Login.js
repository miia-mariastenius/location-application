import { useState } from "react";
import { Alert, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles, { MyTheme } from "../styles/Styles";
import { loginUser } from "../firebase/FirebaseAuthController";

export default function Login() {
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [error, setError] = useState()

  async function signAction() {
    setError(await loginUser(email, pw))
  }

  if (error){
    Alert.alert(error)
    setError(null)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: MyTheme.colors.background }}>
        <View style={Styles.loginTitle}>
          <Text style={Styles.loginFont}>Login</Text>
        </View>
        <View style={Styles.loginContainer}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          label={'Email'}
          left={<TextInput.Icon icon={'email'} />}
          mode="outlined"
          style={Styles.formInputs}
        />
        <TextInput
          value={pw}
          onChangeText={setPw}
          label={'Password'}
          left={<TextInput.Icon icon={'lock'} />}
          mode="outlined"
          style={Styles.formInputs}
          secureTextEntry
        />
        <Button mode='contained' onPress={signAction} style={Styles.loginButton}>Login</Button>
      </View>
    </SafeAreaView>
  )
}