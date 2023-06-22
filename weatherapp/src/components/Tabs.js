import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import City from '../screens/City';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import { Feather} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs=({ weather }) =>{
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
    >
    {() => <CurrentWeather weatherData={weather.list[0]}/>}
    </Tab.Screen>
    <Tab.Screen
      name={'Upcoming'} 
       options={{
       tabBarIcon: ({ focused }) => 
       <Feather name={'clock'} 
       size={25} 
       color={focused ? 'tomato' : 'black'}
      />
     }}
    >
      {() =>{ <UpcomingWeather weatherData={weather.list}/> }}
    </Tab.Screen>
    <Tab.Screen 
      name={'City'} 
      options={{
       tabBarIcon: ({ focused }) => 
       <Feather name={'home'} 
       size={25} 
       color={focused ? 'tomato' : 'black'}
      />
     }}
    >
      {() => <City weatherData={weather.city}/>}
    </Tab.Screen>
  </Tab.Navigator>


}

export default Tabs