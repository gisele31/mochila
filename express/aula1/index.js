const express = require ('express')
const app = express()
app.get('/clientes', (req, res)=>{
    console.log("Bateu na rota de listar todos os clientes")

    const todosOsClientes = [
        {
            id: 1,
            nome:"Alvaro",
            idade:26
        },
        {
            id: 2,
            nome: "Patrick",
            idade: 27
        }
    ]

    res.json(todosOsClientes)
})
 app.post('/clientes', (req, res)=>{
     console.log("Bateu na minha reota de post")
 })

 
app.listen(3333, () => {
    console.log("O servidor foi iniciado com sucesso")
})
