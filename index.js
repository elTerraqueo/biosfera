const express = require("express")

const app = express()

const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hola! esta es mi api")
})

app.listen(port, () => {
    console.log("Estoy escuchando el puerto" + port)
});