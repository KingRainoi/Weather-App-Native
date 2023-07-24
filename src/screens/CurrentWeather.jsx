import React from "react";
import { View,Text,SafeAreaView, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({weatherData}) => {

  const {wrapper,container,tempStyles,feels,highLowWrapper,highLow,boddyWrapper,description,message} = styles;
  
  const {main:{temp,feels_like,temp_max,temp_min},weather} = weatherData;

  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView style={[wrapper,{backgroundColor:weatherType[weatherCondition].backgroundColor} ]} >
      <View style={container}>
        <Feather name={weatherType[weatherCondition].icon} 
        size={100} 
        color="white" />
        <Text style={temp}>{temp}</Text>
        <Text style={feels}>{`Feels like ${feels_like}`}</Text>
        <RowText 
        messageOne={`High: ${temp_max}°`} 
        messageTwo={`Low: ${temp_min}°`} 
        containerStyles={highLowWrapper} 
        messageOneStyles={highLow} 
        messageTwoStyles={highLow}/>
       </View>
      <RowText messageOne={weather[0].description} messageTwo={weatherType[weatherCondition].message} containerStyles={boddyWrapper} messageOneStyles={description} messageTwoStyles={message}/>
    </SafeAreaView>
  )
}

const fraction = 0.04;
const deviceWidth = Dimensions.get('window').width;
const paddingLeft = deviceWidth * fraction;

// console.log(deviceWidth);
// console.log(paddingLeft);

const styles = StyleSheet.create({
  wrapper:{
    backgroundColor:'pink',
    flex:1
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  tempStyles:{
    fontSize:48,
    color:'black'
  },
  feels:{
    fontSize:30,
    color:'black'
  },
  highLowWrapper:{
    flexDirection:'row',
  },
  highLow:{
    fontSize:20,
    color:'black'
  },
  boddyWrapper:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingLeft: paddingLeft,
    marginBottom:40
  } ,
  description:{
    fontSize:48,
  },
  message:{
    fontSize:30, 
  }
})

export default CurrentWeather;