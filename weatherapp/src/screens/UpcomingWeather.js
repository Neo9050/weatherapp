import React from "react"
import { SafeAreaView,
        StyleSheet, 
         FlatList, StatusBar,
          ImageBackground} from 'react-native'
import ListItem from "../components/ListItem"

const UpcomingWeather =({weatherData}) => {
    const renderItem = ({item}) => (
      <ListItem 
      condition={item.weather[0].main} 
      dt_txt={item.dt_txt} 
      min={item.main.temp_min} 
      max={item.main.temp_max}
      />
    )

    const {container, image} = styles
    return(
        <SafeAreaView style={container}>
        <ImageBackground 
           source={require('../../assets/mountains.png')}
           style={image}
        >
           <FlatList
            data={weatherData}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}
           />
           </ImageBackground>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: royalblue,
    },
    image: {
        flex: 1
    }
})
export default UpcomingWeather






//Dummy data
// const DATA =[
//     {
//         dt_txt: '2023-6-21 11:00',
//         main: {
//             temp_max: 9.72,
//             temp_min: 7.34
//         },
//         weather: [
//             {
//                 main: 'Clear'
//             }
//         ]
//     },
//     {
//         dt_txt: '2023-6-21 12:00',
//         main: {
//             temp_max: 9.92,
//             temp_min: 7.24
//         },
//         weather: [
//             {
//                 main: 'Clear'
//             }
//         ]
//     },
//     {
//         dt_txt: '2023-6-21 11:00',
//         main: {
//             temp_max: 9.32,
//             temp_min: 7.14
//         },
//         weather: [
//             {
//                 main: 'Clear'
//             }
//         ]
//     },
// ]
