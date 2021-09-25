import axios from "axios"

export const postData = async (formData) => {
  await axios.get(
    "https://script.google.com/macros/s/AKfycbwdrS2O4FOvSIlQVwlOscqwaDzdeM2Rk8TrzERgpK73iwWZk7dFAmmTCquzM_kNpC0R/exec",
    {
      params: formData
    }
  )
}