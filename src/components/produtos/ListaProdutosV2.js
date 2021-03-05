import React, {useState} from 'react' 
import {FlatList,Text} from 'react-native' 
import Estilo from './../estilo'
import Produtos from './produtos'

export default props => {

    const produtos = ({item: p}) => {
        return (
            <Text>
                {p.id}: {p.nome} e custa R${p.preco}                         
            </Text>
        )
    }

    return (
        <>
            <Text style={Estilo.TxtGrande}>Lista produtos V2</Text>
            <FlatList
                data={Produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtos}
            />
        </>
    )
}