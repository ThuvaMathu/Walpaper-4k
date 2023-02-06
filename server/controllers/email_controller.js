const nodemailer = require("nodemailer");
const AWS = require("aws-sdk");
const sendMail = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const display = `
      <div>
        <h2 style="color: blue">Wall desk</h2>
      </div>
      <div>
        <h6 style="color: blue; text-align:left; ">You got new message from Wall-desk website</h6>
      </div>
      <div>
        <li>
          <span style="font-size: large; font-weight: 600">name:</span>
          <span style="font-size: large">${name}</span>
        </li>
        <li>
          <span style="font-size: large; font-weight: 600">email:</span>
          <span style="font-size: large">${email}</span>
        </li>
        <li>
          <span style="font-size: large; font-weight: 600">message:</span>
          <span style="font-size: large">${message}</span>
        </li>
      </div>
   `;
  var params = {
    Destination: {
      ToAddresses: ["thuvarakan2097@gmail.com"],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: display,
        },
        Text: {
          Charset: "UTF-8",
          Data: "sample text",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Test email",
      },
    },
    Source: "wall-desk@thuvarakan.info" /* required */,
    //ReplyToAddresses: ["thuvarakan2097@gmail.com"],
  };
  var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
    .sendEmail(params)
    .promise();
  sendPromise
    .then(function (data) {
      res.json({
        code: 200,
        status: "ok",
      });
      console.log("message send successfully");
    })
    .catch(function (err) {
      res.json({
        code: 500,
        status: "fail",
      });
      console.error(err, err.stack);
    });
};

module.exports.sendMail = sendMail;
