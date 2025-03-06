import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { IconButton, PaperProvider } from 'react-native-paper';
import { LocationContext } from './context/LocationContext';
import { UserContext } from './context/UserContext';
import { logoutUser, useFireAuth } from './firebase/FirebaseAuthController';
import { addLocation } from './firebase/FirestoreController';
import AddLocation from './screens/AddLocation';
import Capitals from './screens/Capitals';
import Locations from './screens/Locations';
import Login from './screens/Login';
import Map from './screens/Map';
import { MyTheme } from './styles/Styles';

const Tab = createBottomTabNavigator()


export default function App() {

  const [user, locations] = useFireAuth()

  return (
    <UserContext.Provider value={{ user }}>
      <LocationContext.Provider value={{ locations, addLocation }}>
        <PaperProvider theme={MyTheme}>
          {user ? <Navigation /> : <Login />}
        </PaperProvider>
      </LocationContext.Provider>
    </UserContext.Provider>
  )
}

function Navigation() {
  const user = useContext(UserContext)

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerRight: () => <IconButton icon={'logout'} onPress={logoutUser} />,
        headerLeft: () => <IconButton icon={'account-circle'} />,
        headerTitle: user?.email,
        headerStyle: { backgroundColor: '#e6e5f5' },
        tabBarLabelStyle: { fontSize: 12, color: 'black' },
        tabBarStyle: { height: 58, backgroundColor: '#e6e5f5' },
        tabBarActiveBackgroundColor: '#F2F2FF'
      }}>
        <Tab.Screen
          name='Locations'
          component={Locations}
          options={{ tabBarIcon: () => <IconButton icon={'format-list-bulleted'} size={24} /> }}
        />
        <Tab.Screen
          name='Add Location'
          component={AddLocation}
          options={{ tabBarIcon: () => <IconButton icon={'plus-circle'} size={24} /> }}
        />
        <Tab.Screen
          name='Map'
          component={Map}
          options={{ tabBarIcon: () => <IconButton icon={'map'} size={24} /> }}
        />
        <Tab.Screen
          name='Capitals'
          component={Capitals}
          options={{ tabBarIcon: () => <IconButton icon={'city-variant'} size={24} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}