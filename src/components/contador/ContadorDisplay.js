import React, {useState} from 'react' 
import {View,Text} from 'react-native' 
import Estilo from './../estilo' 

export default props => {
    return (
        <View style={Estilo.Display}>
            <Text style={[Estilo.TxtGrande,Estilo.DisplayText]}>
                {props.num}
            </Text>
        </View>
    )
}