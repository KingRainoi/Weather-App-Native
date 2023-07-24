import React from "react";
import { SafeAreaView, StyleSheet, Text,ImageBackground, StatusBar,View } from "react-native";
import { Feather} from '@expo/vector-icons';
import IconText from "../components/Icontext";
import moment from "moment";

const City = ({weatherData}) => {

    const {container, BackgroundImage,
        city,countryStyles,cityText,
        populationWrapper,populationStyles,riseSetWrapper,
        riseSetText,rowLayout} = styles;

    const {name,country,population,sunrise,sunset} = weatherData;

    return(
        <SafeAreaView style={container}>
            <ImageBackground source={require("../../assets/city-background.jpg")} style={BackgroundImage}>
                <Text style={[city,cityText]}>{name}</Text>
                <Text style={[countryStyles,cityText]}>{country}</Text>
                <View style={[populationWrapper,rowLayout]}>
                    <IconText iconName="user" iconColor="red" bodyText={`Population: ${population}`} bodyTextStyles={populationStyles} />
                </View>
                <View style={[riseSetWrapper,rowLayout]}>
                    <IconText iconName="sunrise" iconColor="white" 
                    bodyText={`${moment(sunrise).format('hh:mm:ss a')}`} bodyTextStyles={riseSetText} />
                    <IconText iconName="sunset" iconColor="white" 
                    bodyText={`${moment(sunset).format('hh:mm:ss a')}`} bodyTextStyles={riseSetText} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
    },
    BackgroundImage:{
        flex:1,
    },
    city: {
        fontSize:40
    },  
    countryStyles: {
        fontSize:30
    },
    cityText: {
        justifyContent:"center",
        alignSelf:"center",
        fontWeight:"bold",
        color:"#fff",
    },
    populationWrapper: {
        justifyContent:"center",
        marginTop:30,
    },
    population: {
        fontSize:25,
        marginLeft:7.5,
        color:'red',
    },
    riseSetWrapper: {
        justifyContent:"space-around",
        marginTop:30,
    },
    riseSetText: {
        fontSize:20,
        color:'white',
    },
    rowLayout: {
        flexDirection:"row",
        alignItems:"center",
    }
})

export default City;