import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from './styles/Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton } from 'react-native-paper';
import Locations from './screens/Locations';
import AddLocation from './screens/AddLocation';
import Map from './screens/Map';
import Capitals from './screens/Capitals';
import { LocationContext } from './context/LocationContext';
import { useContext, useState } from 'react';

const Tab = createBottomTabNavigator()


export default function App() {
  
  const [locations, setLocations] = useState([])

  const addLocation = (location) => {
    setLocations([...locations, location]);
  }

  return (
    <LocationContext.Provider value={{ locations, addLocation }}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarLabelStyle: {fontSize: 12, color: 'black'}, tabBarStyle: {height: 58}, tabBarActiveBackgroundColor: '#E2E1F3'}}>
          <Tab.Screen
            name='Locations'
            component={Locations}
            options={{tabBarIcon: () => <IconButton icon={'format-list-bulleted'} size={24}/>}}
          />
          <Tab.Screen
            name='Add Location'
            component={AddLocation}
            options={{tabBarIcon: () => <IconButton icon={'plus-circle'} size={24}/>}}
          />
          <Tab.Screen
            name='Map'
            component={Map}
            options={{tabBarIcon: () => <IconButton icon={'map'} size={24}/>}}
          />
          <Tab.Screen
            name='Capitals'
            component={Capitals}
            options={{tabBarIcon: () => <IconButton icon={'city-variant'} size={24}/>}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </LocationContext.Provider>
  );
}
