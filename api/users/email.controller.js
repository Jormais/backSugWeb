var nodemailer = require('nodemailer');
// email sender function
function sendEmail(req, res){
// Definimos el transporter
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sindicatounificadoguaguas@gmail.com',
            pass: 'informatica2019S'
        }
    });
// Definimos el email
var mailOptions = {
    from: 'Remitente',
    to: 'jonaybrito15@gmail.com',
    subject: req.body.subject,
    text: req.body.text
};
// Enviamos el email
transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
        res.status(500).send(error.message);
    } else {
        console.log("Email sent");
        res.status(200).jsonp(info.response);
    }
});
};

module.exports = {sendEmail};