var express = require('express');
var nodemailer = require('nodemailer');

var router = express.Router();

router.get('/', function (req, res) {
    res.render('index');
});

router.post('/sendmessage', function (req, res) {
   var name = req.body.Name;
   var email = req.body.Email;
   var subject = req.body.Subject;
   var text = req.body.Message;

    var smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'gigtech24@gmail.com',
            pass: 'gimbaisaacgodwin'
        }
    });
    var mailOptions = {
        to: 'gigtech24@gmail.com',
        from: name <email>'and',
        subject: subject,
        text: text
    };
    smtpTransport.sendMail(mailOptions, function(err, info) {
        if(err){
            return console.log(err);
        }

        console.log('Message sent: ' + info.response);
    });

    res.render('index');
});

module.exports = router;