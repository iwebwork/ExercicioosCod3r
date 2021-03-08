import React, {useState} from 'react' 
import {View,Text, TextInput} from 'react-native' 
import Estilo from './estilo' 

export default props => {

    const [teste,setTeste] = useState('Igor')

    return (
        <View>
            <Text style={Estilo.TxtGrande}>{teste}</Text>
            <TextInput 
                placeholder="Qual o seu nome"
                value={null}
                onChangeText={teste => setTeste(teste)}
            />            
        </View>
    )
}