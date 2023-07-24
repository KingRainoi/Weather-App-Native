import React,{useState, useEffect} from "react";
import { ActivityIndicator,View,StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as Location from "expo-location";
//Components Imports
import Tabs from "./src/components/Tabs";
import { WEATHER_API_KEY } from "@env";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {

  const [loading,error,weather] = useGetWeather();
  
  // useEffect(() => {({}) ()})
  console.log(weather['city']);
  const {contaier} = styles;

  if(weather && weather.list && !loading) {
     return(
      <NavigationContainer>
        <Tabs weather={weather}/>
        {/* <Counter/> */}
      </NavigationContainer>
    )
  }
  
  return(
    <View style = {contaier}>
      { error ? (<ErrorItem/>) : (<ActivityIndicator size="large" color="lightblue"/>) }
    </View>
  )

}

const styles = StyleSheet.create({
  contaier: {
    justifyContent: "center",
    flex:1
  }
})

export default App;