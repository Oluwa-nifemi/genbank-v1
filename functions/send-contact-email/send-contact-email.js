require("dotenv").config()
const { SENDINBLUE_API_KEY } = process.env
const SibApiV3Sdk = require("sib-api-v3-sdk")

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed", headers: { "Allow": "POST" } }
  }

  const data = JSON.parse(event.body)
  if (!data.firstName || !data.targetEmail) {
    return { statusCode: 422, body: "Name, email, and message are required." }
  }

  const defaultClient = SibApiV3Sdk.ApiClient.instance
  const apiKey = defaultClient.authentications["api-key"]
  apiKey.apiKey = SENDINBLUE_API_KEY

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()

  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()

  sendSmtpEmail.to = [{ "email": data.targetEmail, "name": data.firstName }]
  sendSmtpEmail.sender = { "email": "donotreply@genbank.us", "name": "Genbank" }
  sendSmtpEmail.subject = "Welcome to Genbank!"
  sendSmtpEmail.templateId = 1
  sendSmtpEmail.params = {FIRSTNAME: data.firstName }

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
    })
  })
}
