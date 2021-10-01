import axios from "axios"

export const postData = async (formData) => {
  await axios.get(
    process.env.GATSBY_SHEET_LINK,
    {
      params: formData
    }
  )
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