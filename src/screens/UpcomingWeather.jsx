import React from "react";
import { SafeAreaView,StyleSheet,Text,FlatList,ImageBackground } from "react-native";
import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
//Imports components
import ListItem from '../components/ListItem';

const UpcomingWeather = ({weatherData}) => {

    const renderItem = ({item}) => (
        <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} max={item.main.temp_max} min={item.main.temp_min} />
    )

    const {container,backgroundImage} = styles;

    return(
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/upcoming-background.jpg')} style={backgroundImage}>
                <Text>UpcomingWeather</Text>
                <FlatList data={weatherData} 
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}/>
            </ImageBackground>
        </SafeAreaView>
    )
}

const fraction = 0.02;
const deviceWidth = Dimensions.get('window').height;
const marginTop = deviceWidth * fraction;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: marginTop || StatusBar.currentHeight,
        backgroundColor:'tan',
    },
    backgroundImage:{
        flex:1,
    },
})

export default UpcomingWeather;