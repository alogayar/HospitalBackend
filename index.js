const express = require('express')
require('dotenv').config();
const {dbConnetion} = require('./database/config')

const app = express()
// DJ12571J
// FSsr3sxj9XYxYjAp

dbConnetion();
console.log(process.env)

app.get('/', (req, res) => {
    res.json({
        status: 200,
        msg: 'Correcto'
    })
})

app.listen(5000, ()=>{
console.log("Servidor arrancado en el puerto" + 5000)
})