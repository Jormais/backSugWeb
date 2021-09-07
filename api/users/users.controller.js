var mysql = require('mysql');
var conexion = mysql.createPool({
    host : process.env.HOST,
    database : process.env.DATABASE,
    user : process.env.USER,
    password : process.env.PASSWORD,
});

var conexion1 = mysql.createPool({
    host : process.env.HOST,
    database : process.env.DATABASE1,
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

        conexion.query(`SELECT * FROM usuarios WHERE usuarios.email='${req.params.id}'`, function (error, results, fields) {
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
        conexion.query(`DELETE FROM usuarios WHERE employee_number=${req.params.id}`, function (error, results, fields) {
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

        

        conexion.query(`INSERT INTO usuarios VALUES ('${req.body.name}','${req.body.subname}','${req.body.employee_number}','${req.body.job_category}','${req.body.email}','${req.body.password}','${req.body.terms_conditions}','${req.body.rol}')`, function (error, results, fields) {
            if (error){
                throw error;
            }else {
                //console.log("insert: " + results);
                console.log(req.body.name);
                return res.json("ECHO");
            }
        });

    });
}

function postUserAcepted(req, res){
    conexion1.getConnection(function(err) {
        if (err) {
            console.error('Error de conexion: ' + err.stack);
            return;
        }

        

        conexion1.query(`INSERT INTO usuarios VALUES ('${req.body.name}','${req.body.subname}','${req.body.employee_number}','${req.body.job_category}','${req.body.email}','${req.body.password}','${req.body.terms_conditions}','${req.body.rol}')`, function (error, results, fields) {
            if (error){
                throw error;
            }else {
                //console.log("insert: " + results);
                console.log(req.body.name);
                return res.json("ECHO");
            }
        });

    });
}

function getOneUserAcepted(req, res){
    conexion1.getConnection(function(err) {
        if (err) {
            console.error('Error de conexion: ' + err.stack);
            return;
        }

        conexion1.query(`SELECT * FROM usuarios WHERE usuarios.email='${req.params.id}'`, function (error, results, fields) {
            if (error){
                throw error;
            }else {
                return res.json(results);
            }
        });

    });
}

module.exports = {getUsers, getOneUser, deleteUSer, putUser, patchOneUser, postOneUser, postUserAcepted, getOneUserAcepted}