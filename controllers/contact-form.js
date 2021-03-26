var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({    
  host: "smtpout.secureserver.net",  
  secure: true,
  secureConnection: false, // TLS requires secureConnection to be false
  tls: {
      ciphers:'SSLv3'
  },
  requireTLS:true,
  port: 465,
  debug: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

function sendEmail(path, req, res) {
  const obj = JSON.parse(JSON.stringify(req.body));
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Interesado(a) en el colegio...",
    html:
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Colegio Montessori Email</title>
      <style>
        img {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      </style>
    </head>
    <body>
      <img src="https://colegiomontessoriveracruz.com/img/colegioMontessoriLogo.png" style="max-height: 200px;">
      <h1>Hola, me llamo ${obj.nombre}.</h1>
      <h3>Y me interesa la oferta que tienen en ${obj.nivelEducativo}</h3>
      <p>Me gustaria concertar una cita. Mi informacion de contacto es la siguiente:</p>
      <ul>
        <li>
          <strong>Email:</strong>
          <a href="mailto:${obj.email}">${obj.email}</a>
        </li>
        <li>
          <strong>Telefono:</strong>
          <a href="tel:${obj.telefono}">${obj.telefono}</a>
        </li>
        <li>
          <strong>Comentarios:</strong>
          <p>${obj.comentarios}</p>
        </li>
      </ul>
    </body>
    </html>`,
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

exports.postContacto = (req, res, next) => {
  sendEmail('/contacto', req, res);
  res.render('static-content/contacto',
      {
          title: 'Colegio Montessori de la Vera Cruz',
          currentYear: new Date().getFullYear(),
          path: '/contacto',
          isEmailSuccessful: true
      }
  );
}

exports.postInscripciones = (req, res, next) => {
  sendEmail('/inscripciones', req, res);
  res.render('static-content/inscripciones',
      {
          title: 'Colegio Montessori de la Vera Cruz',
          currentYear: new Date().getFullYear(),
          path: '/inscripciones',
          isEmailSuccessful: true
      }
  );
}