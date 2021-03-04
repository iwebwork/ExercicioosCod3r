import React, {useState} from 'react' 
import Filho from './Filho'

export default props => {
    let a = 14
    let b = 300
    
    return (
        <>
            <Filho a={a} b={b}></Filho>
            <Filho a={a + 4} b={b  * 4}></Filho>
        </>
    )
}