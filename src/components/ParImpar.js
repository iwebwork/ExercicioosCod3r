import React, {useState} from 'react' 
import {View,Text} from 'react-native' 
import Estilo from './estilo' 

export default ({num = 0}) => {
    return (
        <View>
            <Text style={Estilo.TxtGrande}>O {num} é:</Text>
            {
                num % 2 === 0 
                    ?<Text style={Estilo.TxtGrande}>Par</Text>
                    :<Text style={Estilo.TxtGrande}>Ímpar</Text> 
            }
        </View>
    )
}