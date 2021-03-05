import React, {useState} from 'react' 
import {View,Text} from 'react-native' 
import Estilo from './../estilo' 

import Produtos from './produtos'

export default props => {

    function lista() {
        return Produtos.map(p => {
            return (
                <Text key={p.id}> 
                    {p.id}: {p.nome} e custa R${p.preco} 
                </Text>
            )
        })
    }
    
    return (
        <>
            <Text style={Estilo.TxtGrande}>Lista de Produtos</Text>
            {lista()}
        </>
    )
}