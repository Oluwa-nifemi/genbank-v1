import axios from "axios"

export const postData = async (formData) => {
  await axios.get(
    process.env.GATSBY_SHEET_LINK,
    {
      params: formData
    }
  )
}