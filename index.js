const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        status: 200,
        msg: 'Correcto'
    })
})

app.listen(5000, ()=>{
console.log("Servidor arrancado en el puerto" + 5000)
})