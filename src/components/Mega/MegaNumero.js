import React from 'react' 
import {View,Text, StyleSheet} from 'react-native' 
import Estilo from '../estilo' 

export default ({ num }) => {
    return (
        <View style={style.Container}>
            <Text style={[Estilo.TxtGrande, style.num]}>
                {num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container:{
        backgroundColor:'black',
        height:50,
        width:50,
        margin:5,
        borderRadius:25
    },
    num:{
        color:'#fff'
    }
})