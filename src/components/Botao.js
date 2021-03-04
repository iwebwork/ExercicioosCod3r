import React from 'react'
import {Button} from 'react-native'


export default props => {
    function executar(){
        console.warn('Foi numero 1')
    }
    

    return (
        <>
            <Button 
                title="Executar numero 1" 
                onPress={executar} 
            />
            <Button 
                title="Executar numero 2" 
                onPress={function(){
                    console.warn('Foi numero 2')
                }} 
            />
            <Button 
                title="Executar numero 3" 
                onPress={() => {
                    console.warn('Foi numero 3')
                }} 
            />
        </>
    )

}