//OBJETOS
const pessoa = {
    nome:"Gisele",
    cpf: "104.306.747-75",
    idade: 36,
    casado: false,
    falar: function() {
        return "Estou falando"
    }
}

//OUTRO OBJETO
const animal = {
    raca: "cachorro",
    nome: "code",
    peso: 28.5,
    cor: "caramelo",
    comer: function(){
//console.log("animal comento")
    }
}
animal.comer() //OUTRA FORMA DE IMPRIMIR

//console.log(animal)
//JSON -> PRIMO POBRE
//const informacoesEmJson = '{ "nome": "Alvaro", "idade":26 }'
//const jsonConvertido = JSON.parse(informacoesEmJson)

//console.log(jsonConvertido.nome)

//METODOS DE STRINGS (TEXTO)

//LOOPS OU REPETICOES

console.log(1)
console.log(2)
console.log(3)
//......
 

//loop que irá imprimir do 1 ao 10

for(i = 0; i <= 10; i ++){
    console.log("repetiu")

}

// IF TERNARIO
// if (1== 2){
//     console.log("certo")
// } else {
//     console.log"errado
// }
// 1 == 1? console.log("certo") : console.log("errado")

//ARROW FUNCTION

// function nomeDaFuncao(){
//     console.log("Entrou na Funcao")
// }


const nomeDaFuncao = (valor1, valor2) =>
    console.log(valor1 + valor2)