var nodemailer = require('nodemailer');
var fs = require("fs")

var emails = {

  answer: function (emailObj) {
    fs.readFile("./email/public/suggestion.html", "utf8", function (err, HTMLContent) {

      HTMLContent = HTMLContent.replace("{{req}}", emailObj.req_msg)
      HTMLContent = HTMLContent.replace("{{answer}}", emailObj.res_msg)
      HTMLContent = HTMLContent.replace("{{link}}", emailObj.shop_link)
      HTMLContent = HTMLContent.replace(" {{reactivate_link}}", "http://www.gifthelp.xyz/api/reactivate/" + emailObj.id)

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.emailName,
          pass: process.env.pw
        }
      });
      var mailOptions = {
        from: 'Gift  Hub <gifthubsite@gmail.com>',
        to: emailObj.email,
        subject: 'Someone suggested a gift for you!',
        html: HTMLContent
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    })
  },

  conf: function (emailObj) {
    fs.readFile("./email/public/confirmation.html", "utf8", function (err, HTMLContent) {
      console.log(emailObj)
      HTMLContent = HTMLContent.replace("{{req}}", emailObj.req_msg)

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.emailName,
          pass: process.env.pw
        }
      });
      var mailOptions = {
        from: 'Gift  Hub <gifthubsite@gmail.com>',
        to: emailObj.email,
        subject: 'Your Request has been Recieved',
        html: HTMLContent
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    })
  }
}

module.exports = emails