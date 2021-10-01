require('dotenv').config()
const { SENDINBLUE_API_KEY } = process.env
const { template } = require('./template')
var SibApiV3Sdk = require('sib-api-v3-sdk');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed', headers: { 'Allow': 'POST' } }
  }

  const data = JSON.parse(event.body)
  if (!data.firstName || !data.targetEmail) {
    return { statusCode: 422, body: 'Name, email, and message are required.' }
  }

  var defaultClient = SibApiV3Sdk.ApiClient.instance;
  var apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = SENDINBLUE_API_KEY

  var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

sendSmtpEmail.to = [{ "email":data.targetEmail, "name":data.firstName}];
sendSmtpEmail.sender = { "email":"electronic@genbank.us", "name":"Genbank"};
sendSmtpEmail.htmlContent = template.replace(/{first_name}/g, data.firstName);
sendSmtpEmail.subject = "Welcome to Genbank!";


return new Promise((resolve) => {
  apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
    resolve({
      statusCode: 200,
      body: "Email sent successfully"
    })
  }, function(error) {
    console.log(error)
    resolve({
      statusCode: 400,
      body: "Something went wrong while sending the emails. Kindly retry or contact us at electronic@genbank.us"
    })
  });
})
}
