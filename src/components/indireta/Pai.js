import React, {useState} from 'react' 
import { Text } from 'react-native'
import Filho from './Filho'
import Estilo from './../estilo' 


export default props => {
    let a = 1
    let b = 300
    
    const [num, setNum] = useState(0)
    const [titulo, setTitulo] = useState('')


    function exibirValor(numero, titulo){
        setNum(numero)
        setTitulo(titulo)
    }

    return (
        <>
            <Text style={Estilo.TxtGrande}>{titulo} : {num}</Text>
            <Filho 
                min={a} 
                max={b} 
                funcao={exibirValor}
            />
        </>
    )
}