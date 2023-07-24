import {useState, useEffect} from "react";
import * as Location from "expo-location";
//Components Imports
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {

    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [location, setLocation] = useState(null);
    const [weather, SetWeather] = useState([]);
    const [latitude,SetLatitude] = useState([]);
    const [longitude,SetLongitude] = useState([]);

    const fetchWeatherData = async() => {
        try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
        const data = await res.json();
        SetWeather(data);
        setLoading(false);
        } catch(error) {
        setError('Could not fetch weather data')
        } finally {
        setLoading(false);
        }
  }

   useEffect(() => {
    (async() =>{
      let {status} = await Location.requestForegroundPermissionsAsync();
      if(status!=='granted') {
        setError('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        SetLatitude(location.coords.latitude);
        SetLongitude(location.coords.longitude);
        await fetchWeatherData();
    }) ()
  },[latitude,longitude]) 

  
  return [loading,error,weather];

}