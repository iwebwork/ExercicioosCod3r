import React, {useState} from 'react' 
import {View,Text} from 'react-native' 
import Estilo from './../estilo' 

export default props => {

    return (
        <>
            <Text style={Estilo.TxtGrande}>{props.a}</Text>
            <Text style={Estilo.TxtGrande}>{props.b}</Text>
        </>
    )
}