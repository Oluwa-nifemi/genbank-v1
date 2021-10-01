require('dotenv').config()
const { SENDGRID_API_KEY } = process.env
const sendgrid = require('@sendgrid/mail')
const { template } = require('./template')

sendgrid.setApiKey(SENDGRID_API_KEY)

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed', headers: { 'Allow': 'POST' } }
  }

  const data = JSON.parse(event.body)
  if (!data.firstName || !data.targetEmail) {
    return { statusCode: 422, body: 'Name, email, and message are required.' }
  }

  console.log(template, typeof template)
  const msg = {
    to: data.targetEmail,
    from: 'deyeminifemi@gmail.com',
    subject: `Welcome to Genbank ${data.firstName}!`,
    html: template.replaceAll('{first_name}', data.firstName),
  }

  try{
    await sendgrid.send(msg)
    return {
      statusCode: 200,
      body: "Email sent successfully"
    }
  }catch (e) {
    return {
      statusCode: 400,
      body: "Something went wrong while sending the emails. Kindly retry or contact us at electronic@genbank.us"
    }
  }
}
