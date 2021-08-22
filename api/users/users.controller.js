require('dotenv').config();
var mysql = require('mysql');
var conexion = mysql.createPool({
    host : process.env.HOST,
    database : process.env.DATABASE,
    user : process.env.USER,
    password : process.env.PASSWORD,
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
    conexion.getConnection(function(err) {
        if (err) {
            console.error('Error de conexion: ' + err.stack);
            return;
        }

        conexion.query(`DELETE FROM usuarios WHERE ID=4`, function (error, results, fields) {
            if (error){
                throw error;
            }else {
                //console.log("insert: " + results);
                return res.json(results);
            }
        });

    });
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

        conexion.query(`INSERT INTO usuarios VALUES ('Kati','eres chunga','1519','Otros','KatiBrito@gmail.com','1245532111','1','1','5')`, function (error, results, fields) {
            if (error){
                throw error;
            }else {
                //console.log("insert: " + results);
                return res.json(results);
            }
        });

    });
}

module.exports = {getUsers, getOneUser, deleteUSer, putUser, patchOneUser, postOneUser}