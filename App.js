import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Timer from './components';
import Stopwatch from './components/Stopwatch';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createMaterialBottomTabNavigator();

const TimerIcon = () => (
  <Icon name="hourglass-half" size={24} color="white" />
)

const StopwatchIcon = () => (
  <Icon name='history' size={24} color="white" />
)


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{tabBarIcon:TimerIcon}} name="Timer" component={Timer} />
        <Tab.Screen options={{tabBarIcon:StopwatchIcon}} name="Stopwatch" component={Stopwatch} />
      </Tab.Navigator>
    </NavigationContainer>
  )
   
}


export default App;
