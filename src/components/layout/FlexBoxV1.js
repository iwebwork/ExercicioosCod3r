import React, {useState} from 'react' 
import {View,StyleSheet} from 'react-native' 
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.StyleV1}>
            <Quadrado color='blue'/>
            <Quadrado/>
            <Quadrado color="brown"/>
            <Quadrado color="red"/>
            <Quadrado color="#883"/>
        </View>
    )
}

const style = StyleSheet.create({
    StyleV1:{
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor:"#000"
    }
})