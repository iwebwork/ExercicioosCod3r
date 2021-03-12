import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    TxtGrande: {
        fontSize: 32,
        textAlign: 'center'
    },
    AjustarTexto: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    Display:{
        backgroundColor: 'yellow',
        width:400,
        padding:20
    },
    AreaBotoes:{
        flex:0,
        flexDirection:'row',
        justifyContent:'center',
        padding:20,
        color:'#FFFFFF'
    },
    TexteCenter:{
        textAlign:'center',
    },
    line:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'center'
    }

})