import React, {useState} from 'react'  
import {View,StyleSheet} from 'react-native' 

export default props => {
    return (
        <View style={style.StyleVArea}>
            <View style={style.StyleV0}></View>
            <View style={style.StyleV1}></View>
            <View style={style.StyleV2}></View>
        </View>
    )
}

const style = StyleSheet.create({
    StyleV0:{
        height:40,
        backgroundColor:"brown"
    },
    StyleV1:{
        flex: 5,
        backgroundColor:"yellow"
    },
    StyleV2:{
        flex: 2,
        backgroundColor:"red"
    },
    StyleVArea:{
        flex:1,
        width:100,
        backgroundColor:"green"
    }
})