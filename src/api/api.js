import axios from "axios"

export const postData = async (formData) => {
  if(process.env.NODE_ENV === 'development'){
    await axios.get(
      process.env.GATSBY_SHEET_LINK,
      {
        params: formData
      }
    )
  }else{
    await axios.post(
      '/',
      {
        "form-name": "Register",
        "First Name": formData.firstName,
        "Last Name": formData.lastName,
        "Phone Number": formData.number,
        "Email": formData.email
      }
    )
  }
}

export const sendEmail = async ({ firstName, targetEmail }) => {
  await axios.post(
    '/.netlify/functions/send-contact-email',
    {
      firstName,
      targetEmail
    }
  )
}