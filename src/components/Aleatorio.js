import React from 'react'
import { Text } from 'react-native'

import Estilo from './estilo'

export default (props) => {
    return (
        <Text style={Estilo.TxtGrande}>O valor a: {props.a} e o valor b: {props.b}</Text>
    )
}