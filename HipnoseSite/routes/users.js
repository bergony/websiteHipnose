var express = require('express');
var router = express.Router();

const nodemailer = require('nodemailer');


/* GET users listing. */
router.post('/', function(req, res) {

    const body = req.body;
    console.log(body);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        auth: {
            user: 'esphipclinica@gmail.com',
            pass: 'bbbgatos100'
        }
    })


    var mailOptions = {

        from: req.body.email,
        to: "izadoramar@gmail.com",
        subject: req.body.cidade,
        text: "Eu " + req.body.nome + " Melo " + req.body.Sobrenome + " moro na cidade de " + req.body.cidade + "/" + req.body.estado + ", " + req.body.endereco + " no cep " + req.body.cep + ", meu telefone para contato " + req.body.telefone + " e o meu email " + req.body.email + ". Gostaria de agendar uma avaliação."
    };

    console.log(mailOptions);

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    return res.redirect("/");
});
module.exports = router;