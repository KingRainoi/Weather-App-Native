import React from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';
import { useState,useEffect } from 'react';

const Counter = () => {

    const [count,setCount] = useState(0);
    const [newCount,setNewCount] = useState(0);
    const {container,title} = styles;

    useEffect(() => {
        console.log(`Our count value is: ${count}`)
        return() => {
            console.log('Clean up')
        }
    },[count])

    return(
        <View style={container}>
            <Text style={title}>{`Total ${count}`}</Text>
            <Button 
            color={'red'} 
            title={'Increase total'}
            onPress={() => {
                setCount(count + 1) 
            }}/>
            <Button 
            color={'green'}
            title={'Decrease total'}
            onPress={() => {
                setCount(count - 1)
            }}/>

            <Button 
            color={'red'} 
            title={'Increase total'}
            onPress={() => {
                setNewCount(newCount + 1) 
            }}/>
            <Button 
            color={'green'}
            title={'Decrease total'}
            onPress={() => {
                setNewCount(newCount - 1)
            }}/>
        </View>
    )    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    title:{
        fontSize:25,
        alignSelf:'center',
        marginTop:25
    }
})

export default Counter;