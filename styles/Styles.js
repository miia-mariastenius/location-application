import { StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";

export const MyTheme = {
  ...MD3LightTheme,
  colors:{
    ...MD3LightTheme.colors,
    primary: '#21005D',
    secondaryContainer: '#ac9ec6',
    background: '#F2F2FF'
  },
}

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#F2F2FF',
    marginTop: 0,
    marginBottom: 0,
  },
  listTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: -12,
  },
  starRating: {
    alignItems: "flex-start",
    //backgroundColor: 'red',
  },
  listflex: {
    flex: 1,
    //flexDirection: 'row-reverse',
    //backgroundColor: 'lightgray',
  },
  textContainer: {
    flexShrink: 1,
    paddingTop: 15,
    paddingLeft: 6,
  },
  buttonContainer: {
    //backgroundColor: 'red',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  listButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  locationForm:{
    gap: 5,
    padding: 10,
  },
  formInputs:{
    backgroundColor: '#ffffff'
  },
  formButton:{
    padding: 5,
    borderRadius: 30,
  },
  searchInput:{
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#ffffff'
  },
  loginContainer:{
    marginRight: 20,
    marginLeft: 20,
    padding: 15,
    gap: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
  },
  loginFont: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  loginTitle:{
    alignItems: "center",
  },
  loginButton:{
    marginTop: 50,
  }
})