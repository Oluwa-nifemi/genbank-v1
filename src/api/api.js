import axios from "axios"

const postData = async (formData) => {
  await axios.get(
    "https://script.google.com/macros/s/AKfycbxTxbJwUwJoaPR_SqGl6du7g2XiWLxmBXL6poljtfFLSz_bLgxQe6uceLuUOFixEf02/exec",
    {
      params: formData
    }
  )
}