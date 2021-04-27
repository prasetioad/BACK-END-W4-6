const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    service : 'Gmail',
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  });

  const sendMail = (userid, email, token, password)=>{
      return new Promise(async (resolve, reject) =>{
          let info = await transporter.sendMail({
              from: process.env.EMAIL, // sender address
              to: email, // list of receivers
              subject: "Hello ✔", // Subject line
              text: "Hello world?", // plain text body
              html: `    <!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Document</title>
                  <style>
            header{
                color: #fff;
                background-color: black;
                font-family: 'Mulish', Georgia, 'Times New Roman', Times, serif;
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                padding: 15px auto;
            }
            main{
                background-color: blanchedalmond;
                background-color: black;
                font-family: 'Mulish', Georgia, 'Times New Roman', Times, serif;
                text-align: left;
            }
            footer{
                background-color: black;
                color: #fff;
                padding: 10px auto;
            }
        </style>
              </head>
              <body>
                  <header>
                      <h3>ACTIVATION</h3>
                  </header>
                  <main>
                      <p>Hello there...</p>
                      <p>this is your activation link :</p>
                      <p>http://localhost:3000/auth/${token}/${userid}/${email}/${password}<p>
                  </main>
                  <footer>
                        <p>regards...</p>
                        <p>team</p>
                   </footer>
              </body>
              </html> `, // html body
            });
            resolve(info)
      })
  }

  module.exports = {
      sendMail
  }