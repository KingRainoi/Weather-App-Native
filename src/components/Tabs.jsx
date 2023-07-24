import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from '@expo/vector-icons';
//Components Imports
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";

const Tab = createBottomTabNavigator();

const Tabs = ({weather}) => {

    console.log(weather.City);

    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor:'green', 
            tabBarInactiveTintColor:'grey',
            tabBarStyle:{
                backgroundColor:'lightblue',
            },
            headerStyle: {
                backgroundColor:'lightblue'
            },
            headerTitleStyle: {
                fontSize:25,
                fontWeight:'bold',
                color:'tomato'
            }
            }}>
            <Tab.Screen 
            name={"CurrentWeather"}
            options={{
            tabBarIcon: ({focused}) => (
            <Feather 
                name={"droplet"} size={25} color={focused ? 'green' : 'grey'}/>
                )
            }}>
                { () => <CurrentWeather weatherData={weather.list[0]} /> }
            </Tab.Screen>
            <Tab.Screen 
            name={"UpcomingWeather"} 
            options={{
            tabBarIcon: ({focused}) => (
                <Feather 
                name={"clock"} size={25} color={focused ? 'green' : 'grey'}/>
            )
            }}>
                { () => <UpcomingWeather weatherData={weather.list} /> }
            </Tab.Screen>
            <Tab.Screen 
            name={"City"} 
            options={{
            tabBarIcon: ({focused}) => (
                <Feather 
                name={"map-pin"} size={25} color={focused ? 'green' : 'grey'}/>
            )
            }}>
                {() => <City weatherData={weather['city']}/>}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs;