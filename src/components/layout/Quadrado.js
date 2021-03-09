import React, {useState} from 'react' 
import {View} from 'react-native' 

export default props => {
    return (
        <View 
            style={{
                height:55,
                width:55,
                backgroundColor: props.color || 'green'
            }}
        >

        </View>
    )
}
