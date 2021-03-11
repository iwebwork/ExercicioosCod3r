import React, {Component} from 'react' 
import {View,Text,TextInput,FlatList,Button} from 'react-native' 
import Estilo from './../estilo' 
import {getRandomIntInclusive} from '../../funcoes'

export default class Mega extends Component{
    
    state = {
        qtDeNumeros: this.props.qtDeNumeros,
        numeros: []
    }

    alterarQtdNumero =(qt) => {
        this.setState({qtDeNumeros: +qt})
    }

    gerarNumeros = () =>{
        const numeros = Array(this.state.qtDeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumero(n)], [])
            .sort((a, b) => a - b)
        this.setState({numeros})
    }

    gerarNumero = nums => {
        const numero = getRandomIntInclusive(0, this.state.qtDeNumeros * 1000)

        //Caso o numero gerado ja exista dentro do nums, eu chamo a função novamente
        return nums.includes(numero) ? this.gerarNumero(nums) : numero

    }

    render(){
        return(
            <View>
                <Text style={Estilo.TxtGrande}>
                    numeros a gerar {this.state.qtDeNumeros}
                </Text>
                <TextInput
                    style={{borderBottomWidth: 1}}
                    keyboardType={'numeric'}
                    placeholder="Escreva a quantidade de numeros"
                    value={`${this.state.qtDeNumeros}`}
                    onChangeText={this.alterarQtdNumero}
                />

                <Button
                    title="Gerar Numeros"
                    onPress={this.gerarNumeros}
                />

                <Text>
                    {this.state.numeros.join('-')}
                </Text>                
            </View>
            
        )
    }

}