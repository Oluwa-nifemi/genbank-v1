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
    const formDataSearchParams = new URLSearchParams();
    formDataSearchParams.set("firstName", formData.firstName)
    formDataSearchParams.set("lastName", formData.lastName)
    formDataSearchParams.set("number", formData.number)
    formDataSearchParams.set("email", formData.email)
    formDataSearchParams.set("form-name", "Register")

    await axios.post(
      '/',
      formDataSearchParams.toString(),
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