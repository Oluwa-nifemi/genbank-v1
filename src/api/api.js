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
    formDataSearchParams.set("First Name", formData.firstName)
    formDataSearchParams.set("Last Name", formData.lastName)
    formDataSearchParams.set("Phone Number", formData.number)
    formDataSearchParams.set("Email", formData.email)
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