import React,{useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import * as Location from 'expo-location';
import {WEATHER_API_KEY} from '@env'
import { useGetWeather } from './src/hooks/useGetWeather';
import ErrorItem from './src/components/Erroritem';

const App = () => {
   const [loading, error, weather] = useGetWeather()
  //  console.log(loading,error,weather)

  if(weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
    );
  }

    return(
        <View style={styles.container}>
          { error ? (
            <ErrorItem /> 
            ) : (
              <ActivityIndicator size={"large"} color={'blue'}/>
            )} 
        </View>
    )
  }

  if(location) {
    console.log(location)
  }


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})
export default App;




// import Counter from './src/demostration/Counter';
   {/* <Counter/> */}