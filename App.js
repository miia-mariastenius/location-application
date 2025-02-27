import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from './styles/Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

const LOCATIONS = 'Locations'
const ADD_LOCATION = 'Add Location'
const MAP = 'Map'
const CAPITALS = 'Capitals'
const icons = {
  [LOCATIONS]: 'list',
  [ADD_LOCATION]: 'add',
  [MAP]: 'map',
  [CAPITALS]: 'flag',
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={LOCATIONS} component={LocationsScreen}/>
        <Tab.Screen name={ADD_LOCATION} component={AddLocationScreen}/>
        <Tab.Screen name={MAP} component={MapScreen}/>
        <Tab.Screen name={CAPITALS} component={CapitalsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const LocationsScreen = () => <View/>
const AddLocationScreen = () => <View/>
const MapScreen = () => <View/>
const CapitalsScreen = () => <View/>