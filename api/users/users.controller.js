var mysql = require('mysql');
var conexion = mysql.createPool({
    host : 'direccion',
    database : 'database',
    user : 'usuario',
    password : 'constraseña',
});

function getUsers(req, res){
    conexion.getConnection(function(err) {
        if (err) {
            console.error('Error de conexion: ' + err.stack);
            return;
        }

        conexion.query('SELECT * FROM usuarios', function (error, results, fields) {
            if (error){
                throw error;
            }else {
                return res.json(results);
            }
        });

    });
}

function getOneUser(req, res){
    conexion.getConnection(function(err) {
        if (err) {
            console.error('Error de conexion: ' + err.stack);
            return;
        }

        conexion.query("SELECT * FROM usuarios WHERE usuarios.nombre='Katiuska'", function (error, results, fields) {
            if (error){
                throw error;
            }else {
                return res.json(results);
            }
        });

    });
}

function deleteUSer(req, res){

}
function putUser(req, res){

}
function patchOneUser(req, res){

}
function postOneUser(req, res){
    conexion.getConnection(function(err) {
        if (err) {
            console.error('Error de conexion: ' + err.stack);
            return;
        }

        conexion.query("INSERT INTO usuarios VALUES ('Nilsa','Brito Santana','1518','Otros','NilsaBrito@gmail.com','987654321','1','1','4');", function (error, results, fields) {
            if (error){
                throw error;
            }else {
                console.log("insert: " + results);
                return res.json(results);
            }
        });

    });
}

module.exports = {getUsers, getOneUser, deleteUSer, putUser, patchOneUser, postOneUser}