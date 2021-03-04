import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'


export default function ComponentUm(){
    return <Text style={Estilo.FontGrande}>Component Um</Text>
}

export function ComponentDois(){
    return <Text>Component Dois</Text>
}

export function ComponentTres(){
    return <Text>Component Tres</Text>
}