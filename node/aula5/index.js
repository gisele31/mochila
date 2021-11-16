//variavel de controle, condição, incremento ou ação
// for (let i = 0; i <= 9; i++){
//     console.log("Entrou" + i)
// }

// function nomeFuncao(parametro1, parametro2){
//     console.log(parametro1, parametro2)
// }
// nomeFuncao("Olá","mundo")

// let nomeFuncao = (parametro1, parametro2) =>{
//     console.log(parametro1,parametro2)
// }
// nomeFuncao("Olá" ,"mundo")

// let pegaNome = (nome) => {
//     return nome
// }
// let saudar = (nome, callback) =>{
//    const saudacao = "Olá" + callback (nome)
//    return saudacao
// }
// const resultado = saudar("Alvaro", pegaNome)
// console.log(resultado)

//METODOS DE ARRAY
// let nomes = ['Álvaro', 'Patrícia', 'Marcelo', 'Patrick']
// let novoArray = nomes.map((nome) => {
//         return 'Olá' + nome  
// })
// console.log(novoArray)

//METODOS DE ARRAY
// let nomes = ['Álvaro', 'Patrícia', 'Marcelo', 'Patrick']
// let retornoFind = nomes.find((nome) => {
//        return nome ==='Patrícia'
// })
// console.log(retornoFind)

//METODOS DE ARRAY
// let nomes = ['Álvaro', 'Patrícia', 'Marcelo', 'Patrick']
// let novoArray = nomes.filter((nome) => {
//         return nome === 'Patrícia'
// })
// console.log(novoArray)

// let nomes = ['Álvaro', 'Patrícia', 'Marcelo', 'Patrick']
// nomes.forEach((nome) => {
//     console.log(nome)
// })

//DATE
// const dataAgora = new Date();
// console.log(dataAgora)

//DATE
const dataAgora = new Date();
console.log(dataAgora.getDate())

// //DATE
// const dataAgora = new Date();
// console.log(dataAgora.getMonth())