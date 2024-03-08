import * as React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import SettingScreen from './screens/SettingScreen';
function App() {
  const Tab = createBottomTabNavigator();
  return (
   <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Category" component={CategoryScreen} />
            <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
   </NavigationContainer>
  );
}



export default App;