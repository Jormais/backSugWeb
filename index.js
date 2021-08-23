require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

//asegurarse de configurar cors para solo acceder desde el front
app.use(cors());
app.use(express.json());

const usuariosRouter = require('./api/users/users.router');

app.use("/users", usuariosRouter)

app.listen(3000, e => {
    if (e) {
        console.log(e);
    } else {
        console.log("servidor ejecutandose en el puerto 3000");
    }
})