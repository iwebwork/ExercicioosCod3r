import React, {useState} from 'react' 
import {View,Text} from 'react-native' 
import Estilo from './estilo' 

import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <View>
            <If 
                teste={usuario && Object.keys(usuario).length != 0 
                    && usuario.nome != "" && usuario.email != ""
            }>
                <Text style={Estilo.TxtGrande}>
                    Usuario logado: {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </View>
    )
}