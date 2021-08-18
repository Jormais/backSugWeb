const express = require('express');
const app = express();

app.use(express.json());

const usuariosRouter = require('./api/users/users.router');

app.use("/usuarios", usuariosRouter)

app.listen(3000, e => {
    if (e) {
        console.log(e);
    } else {
        console.log("servidor ejecutandose en el puerto 3000");
    }
})