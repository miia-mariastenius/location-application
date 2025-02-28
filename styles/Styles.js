import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    flexDirection: 'row',

  },
  starRating: {
    alignItems: "flex-start",
    //backgroundColor: 'red',
  },
  listflex: {
    flex: 1,
    //flexDirection: 'row-reverse',
    backgroundColor: 'lightgray',
  },
  textContainer: {
    flexShrink: 1,
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
  },
  map: {
    width: '100%',
    height: '100%',
  }
})