const express = require('express');
const app = express();
const cors = require('cors');


// middlewares
//para entender los datos que se envian al servidor con json
//middleware
app.use(express.json());

//entender lo que el servidor envia al cliente
app.use(express.urlencoded({extended: false}));
app.use(cors())

app.use(require('./routes/index'))
//para buiscar en la carpet a"public" dond eestan las imagenes
app.use(express.static('public'))

app.listen(3000)
console.log('server en el puerto 3000')