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

    gerarNumerosFunc = () =>{
        // Gerar um array 
        const numeros = Array(this.state.qtDeNumeros)
            // com a quantidade de numeros da classe
            .fill()
            // O reduce cria um array com a quantidade de numeros definido
            // chamando a função de gerar um numero que seja diferente dos que ja existem
            .reduce(n => [...n, this.gerarNumero(n)], [])
            // O sorte organiza o arrray, neste caso é do menor para o maior
            .sort((a, b) => a - b)
        
        // Depois do array gerado eu entrego para o state
        this.setState({numeros})
    }

    gerarNumerosProc = () => {
        const {qtDeNumeros} = this.state
        const numeros = []

        for (let index = 0; index < qtDeNumeros; index++) {
            const n = this.gerarNumero(numeros)

            // Dou um push no mesmo array que estou gerando
            numeros.push(n)
        }

        numeros.sort((a,b) => a - b)
        this.setState({numeros})
    }

    gerarNumero = nums => {
        const numero = getRandomIntInclusive(0, this.state.qtDeNumeros * 1000)

        //Caso o numero gerado ja exista dentro do nums, eu chamo a função novamente
        return nums.includes(numero) ? this.gerarNumerosFunc(nums) : numero

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
                    onPress={this.gerarNumerosProc}
                />

                <Text>
                    {this.state.numeros.join('-')}
                </Text>                
            </View>
            
        )
    }

}