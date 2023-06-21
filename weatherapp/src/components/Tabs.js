import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import City from '../screens/City';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import { Feather} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs=() =>{
    <Tab.Navigator
    screenOptions={{
     tabBarActiveTintColor: 'tomato',
     tabBarInActiveTintColor: 'gray',
     tabBarStyle: {
        backgroundColor: 'lightblue'
     },
     headerStyle:{
      backgroundColor: 'lightblue'
     },
     headerTitleStyle:{
      fontWeight: 'bold',
      fontSize: 25,
      color: 'Tomato'
     }
    }}
   >
    <Tab.Screen name={'Current'} component={CurrentWeather}
     options={{
       tabBarIcon: ({ focused }) => <Feather name={'droplet'} size={25} color={focused ? 'tomato' : 'black'}/>
     }}
    />
    <Tab.Screen name={'Upcoming'} component={UpcomingWeather} 
       options={{
       tabBarIcon: ({ focused }) => <Feather name={'clock'} size={25} color={focused ? 'tomato' : 'black'}/>
     }}
    />
    <Tab.Screen name={'City'} component={City}
      options={{
       tabBarIcon: ({ focused }) => <Feather name={'home'} size={25} color={focused ? 'tomato' : 'black'}/>
     }}
    />
  </Tab.Navigator>


}

export default Tabs