import React from 'react'
import { Text } from 'react-native'

import Estilo from './estilo'

export default (props) => {

    return (
        <Text style={Estilo.TxtGrande}>
            e a soma dos dois e: {props.soma}
        </Text>
    )
}