import React, {useState} from 'react' 
import {View,Button} from 'react-native' 
import Estilo from './../estilo' 

export default props => {
    return (
        <View style={Estilo.AreaBotoes}>
            <Button style={Estilo.Botoes} title="+" onPress={props.incre}></Button>
            <Button style={Estilo.Botoes} title="-" onPress={props.decre}></Button>
        </View>
    )
}