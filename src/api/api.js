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
    const formData = new URLSearchParams();
    formData.set("First Name", formData.firstName)
    formData.set("Last Name", formData.lastName)
    formData.set("Phone Number", formData.number)
    formData.set("Email", formData.email)
    formData.set("form-name", "Register")

    await axios.post(
      '/',
      formData.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
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