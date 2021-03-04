import React, {useState} from 'react'
import {Text, Button} from 'react-native'

import Estilo from './estilo'

export default props => {

    const [valor, setValor] = useState(props.inicial)


    const incremento = () => setValor(valor + props.incremento)

    const decremento = () => setValor(valor - props.incremento)


    return (
        <>
            <Text style={Estilo.TxtGrande}>{valor}</Text>
            <Button title="Incremento" onPress={incremento}/>
            <Button title="Subtrair"  onPress={decremento}/>
        </>
    )
}
