const express = require('express'),
      path = require('path'),
      nodemailer = require('nodemailer'),
      router = express.Router();

// Post Index
router.post('/send-email', (req, res, next) => {

  var email_to = 'bohdan.zb@gmail.com';
  var email_from = req.body.params.email;
  var name = req.body.params.name;
  var phone = req.body.params.phone;
  var message = req.body.params.message;

  var transporter = nodemailer.createTransport({
    //service: 'gmail',
    host: "smtp.gmail.com", // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    auth: {
      user: email_to,
      pass: 'sky7fall1'
    }
  });

  var mailOptions = {
    from: email_from,
    to: email_to,
    subject: name,
    html: '<p>Numer telefonu: '+phone+'</p><p>Treść: '+message+'</p>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      //return false
      res.json(false)
    } else {
      console.log('Email sent: ' + info.response);
      //return true
      res.json(true)
    }
  });

});


// Get Index
router.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../../app/client/dist/index.html'));
});

module.exports = router;
