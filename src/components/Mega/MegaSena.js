import React, {Component} from 'react' 
import {Text,TextInput,Button, View} from 'react-native' 
import Estilo from './../estilo' 
import {getRandomIntInclusive} from '../../funcoes'
import MegaNumero from './MegaNumero'

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
        const numero = getRandomIntInclusive(0, 1000)

        //Caso o numero gerado ja exista dentro do nums, eu chamo a função novamente
        return nums.includes(numero) ? this.gerarNumerosFunc(nums) : numero

    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key = {num} num={num}/>
        })
    }

    render(){
        return(
            <>
                <Text style={Estilo.TxtGrande}>
                    numeros a gerar {this.state.qtDeNumeros}
                </Text>
                <TextInput
                    style={[Estilo.TxtGrande,{borderBottomWidth: 1}]}
                    keyboardType={'numeric'}
                    placeholder="Escreva a quantidade de numeros"
                    value={`${this.state.qtDeNumeros}`}
                    onChangeText={this.alterarQtdNumero}
                />
                <View style={Estilo.AreaBotoes}>
                    <Button
                        title="Gerar Numeros"
                        onPress={this.gerarNumerosProc}
                    />
                </View>

                <View style={Estilo.line}>
                    {this.exibirNumeros()}               
                </View>
            </>
            
        )
    }

}