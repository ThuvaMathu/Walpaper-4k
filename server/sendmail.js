// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "ap-southeast-2" });
var credentials = new AWS.SharedIniFileCredentials();
AWS.config.credentials = credentials;
AWS.config.getCredentials(function (err) {
  if (err) console.log("AWS credentials loaded successfully\n", err.stack);
  else {
    console.log("**AWS credentials loaded successfully");
  }
});
// Create sendEmail params
var params = {
  Destination: {
    /* required */
    // CcAddresses: [
    //   "thuvamathu618@gmail.com",
    //   /* more items */
    // ],
    ToAddresses: [
      "thuvarakan2097@gmail.com",
      /* more items */
    ],
  },
  Message: {
    /* required */
    Body: {
      /* required */
      Html: {
        Charset: "UTF-8",
        Data: "<h1>hello world</h1>",
      },
      //   Text: {
      //     Charset: "UTF-8",
      //     Data: "TEXT_FORMAT_BODY",
      //   },
    },
    Subject: {
      Charset: "UTF-8",
      Data: "Test email",
    },
  },
  Source: "JNJFlooring@thuvarakan.info" /* required */,
  ReplyToAddresses: ["thuvarakan2097@gmail.com"],
};

// Create the promise and SES service object
var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
  .sendEmail(params)
  .promise();

// Handle promise's fulfilled/rejected states
sendPromise
  .then(function (data) {
    console.log("message send: ", data.MessageId);
  })
  .catch(function (err) {
    console.error(err, err.stack);
  });
