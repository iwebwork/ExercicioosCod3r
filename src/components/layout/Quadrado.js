import React, {useState} from 'react' 
import {View} from 'react-native' 

export default props => {
    const lado = 55
    return (
        <View 
            style={{
                height:lado,
                width:lado,
                backgroundColor: props.color || 'green'
            }}
        >

        </View>
    )
}
