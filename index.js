require('dotenv').config();

const express = require('express')
const {dbConnetion} = require('./database/config')
const  cors = require('cors')
const app = express()
// DJ12571J
// FSsr3sxj9XYxYjAp

app.use(cors())
dbConnetion();

app.get('/', (req, res) => {
    res.json({
        status: 200,
        msg: 'Correcto'
    })
})

app.listen(process.env.PORT, ()=>{
console.log("Servidor arrancado en el puerto:" + process.env.PORT)
})