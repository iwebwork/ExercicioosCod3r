import React, {useState} from 'react'  
import {View,StyleSheet} from 'react-native' 
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.StyleV3}>
            <Quadrado color='#FFF345' lado={20}/>
            <Quadrado lado={30}/>
            <Quadrado color="#dddd" lado={40}/>
            <Quadrado color="red" lado={50}/>
            <Quadrado color="black" lado={60}/>
        </View>
    )
}

const style = StyleSheet.create({
    StyleV3:{
        flexDirection:"row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height:350,
        width:'100%',
        backgroundColor:"blue"
    }
})