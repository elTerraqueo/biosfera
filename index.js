const { json } = require("express");
const express = require("express")

const app = express()

const port = process.env.PORT || 3000;

const integrantes = [
    {name: "enzo", age: 30},
    {name: "sofia", age: 25}
]

app.get("/", (req, res) => {
    res.send("Hola! esta es mi api")
})

app.get("/integrantes", (req, res) => {
    res.status(200).json({
        message: "Succeed",
        data: integrantes
    })
})

app.get("/integrantes/:name", (req, res) => {
    const name = req.params.name;
    const integrante = integrantes.filter((item) => item.name == name)
    if(integrante==""){
        res.status(404).json({
            message: "Not Found",
            data: ""
        })
    }else{
        res.status(200).json({
            message: "Succeed",
            data: integrante
        })
    }
})

app.listen(port, () => {
    console.log("Estoy escuchando el puerto " + port)
});