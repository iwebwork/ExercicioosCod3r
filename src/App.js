import React from 'react'
import { View,SafeAreaView } from 'react-native'
// import Titulo from './components/Titulo'
// import PrimeiroComponente from './components/PrimeiroComponent'
// import Padrao, { ComponentDois, ComponentTres } from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import { Maior, Menor, Somar, getRandomIntInclusive } from './funcoes'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import PaiDireto from './components/direta/Pai'
// import PaiIndireto from './components/indireta/Pai'
// import ContadorV2 from './components/contador/ContadorV2'
// import ParImpar from './components/ParImpar'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import UsuarioLogado from './components/UsuarioLogado'
// import ListaProdutos from './components/produtos/ListProdutos'
import ListaProdutosV2 from './components/produtos/ListaProdutosV2'

import Estilo from './components/estilo'

export default () => {

    // const num = getRandomIntInclusive(1, 60)
    // const b = getRandomIntInclusive(1, 60)
    return (
        <SafeAreaView style={Estilo.AjustarTexto}>
            <ListaProdutosV2/>

            {/* <ListaProdutos/>
                <UsuarioLogado 
                        usuario={{
                            nome:"Igor",
                            email:"teste@teste.com"
                        }}
                    />
                    <UsuarioLogado 
                        usuario={{
                    
                }}
            /> */
            /* <UsuarioLogado 
                 usuario={{
                     nome:"",
                     email:""
                    }}
             />
             <UsuarioLogado 
                 usuario={
                     null
                    }
             /> */}
            {/* <Familia>
                <Membro nome="Igor" sobrenome="Da Silva"></Membro>
                <Membro nome="Fulano" sobrenome="Da Beltrano"></Membro>
            </Familia>
            <Familia>
                <Membro nome="Joaquin" sobrenome="De arruda"></Membro>
                <Membro nome="Orlando" sobrenome="Da Belar"></Membro>
            </Familia> */}
            {/* <ParImpar num={num}/> */}
            {/* <ContadorV2/> */}
            {/* <PaiIndireto></PaiIndireto> */}
            {/* <PaiDireto></PaiDireto> */}
            {/* <Contador inicial={0} incremento = {5}/> */}
            {/* <Titulo principal="Contador" secundario=""/> */}
            {/* <Botao /> */}
            { /* <Aleatorio a={a} b={b} /> */}
            {/* <MinMax maior={Maior(a, b)} menor={Menor(a, b)} soma={Somar(a, b)} /> */}
            {/* <Padrao></Padrao>  */}
            {/* <ComponentDois></ComponentDois> */}
            {/* <ComponentTres></ComponentTres> */}
            {/* <PrimeiroComponente/> */}
        </SafeAreaView>
        
        )
    }