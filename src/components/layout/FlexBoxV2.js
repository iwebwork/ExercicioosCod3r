import React, {useState} from 'react' 
import {View,StyleSheet} from 'react-native' 
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.StyleV2}>
            <Quadrado color='#333dd3'/>
            <Quadrado/>
            <Quadrado color="pink"/>
            <Quadrado color="red"/>
            <Quadrado color="black"/>
        </View>
    )
}

const style = StyleSheet.create({
    StyleV2:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent: 'space-evenly',
        backgroundColor:"gray"
    }
})