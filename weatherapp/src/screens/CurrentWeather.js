import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';


const CurrentWeather = () =>{
  const {
     wrapper, 
     container, 
     temp, 
     feels, 
     highLow,
      highLowWrapper, 
      bodyWrapper, 
      description,
       message
      } = styles
  return(
    <SafeAreaView style={wrapper}>
    <View style={container}> 
     <Feather name="sun" size={24} color="black" />
      <Text> style={temp} 6 </Text>
      <Text> style={feels} Feels like 5 </Text>
      <RowText 
      containerStyles={highLowWrapper} 
      messageOne={'High: 8'} 
      messageTwo={'Low: 6'} 
      messageOneStyles={highLow}
      messageTwoStyles={highLow}
      />
    </View>
    <RowText
       containerStyles={bodyWrapper}
       messageOne={'Its Sunny'}
       messageTwo={weatherType['ThunderStrom'].message}
       messageOneStyles={description}
       messageTwoStyles={message}
    />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'green'
  },
   container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description:{
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default CurrentWeather