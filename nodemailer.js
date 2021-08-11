const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'sina.heydarian.sh@gmail.com',
        pass : 'Deutscher7google'
    }
});

let options = {
    from : 'sina.heydarian.sh@gmail.com',
    to : 'sinaheidarianmiri@gmail.com',
    subject : 'verfication email',
    text : 'you are verficated!'
};

transporter.sendMail(options, function(err, info) {
    if(err) {
        console.log(err);
    } else {
        console.log('Email has been sent...' + info.response);
    }
});