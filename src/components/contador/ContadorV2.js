import React,{useState} from 'react' 
import {View,Text} from 'react-native' 
import Estilo from './../estilo' 

import ContadorDisplay from './ContadorDisplay'
import ContadorBotoes from './ContadorBotoes'

export default props => {

    const [num,setNum] = useState(0)

    const incre = () => setNum(num + 1)
    const decre = () => setNum(num - 1)

    return (

        <View style={Estilo.AjustarTexto}>
            <Text style={Estilo.TxtGrande}>Contador V2</Text>
            <ContadorDisplay num={num}/>
            <ContadorBotoes incre={incre} decre={decre}/>
        </View>
    )
}