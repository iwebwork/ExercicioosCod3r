import React, {useState} from 'react' 
import {View,Text, Button} from 'react-native' 
import {getRandomIntInclusive} from './../../funcoes'

export default props => {

    return (
        <Button 
            title="Executar"
            onPress={ 
                function(){ 
                    const n = getRandomIntInclusive(props.min, props.max)
                    props.funcao(n,'Numero')
                }

            } 

        />
    )
}