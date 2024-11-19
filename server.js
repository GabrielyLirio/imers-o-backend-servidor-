import express from "express";

const app = express(); // criando a constante que se chama app com o express 
app.listen(3000,() => { // está dizendo que quer que o servidor do express ouça oque está na porta 3000
    console.log("Servidor escutando..."); // ex: ei servidor, fique escutando essa mensagem 
});

app.get("/api", (req, res) => {// app chama (get) a porta que estiver com barra api na barra de pesquisa, ele requisita(req) e responde (res)
    res.status(200) .send ("Boas vindas à imersão");
});