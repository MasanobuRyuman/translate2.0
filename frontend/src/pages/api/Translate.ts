import axios from "axios";


const axiosInstance = axios.create();

export const ENFromJPTramsLate = async (EN:string) => {
  
  const parameter = {
    data : {
      free_api: true, 
      text: EN,
      target_lang: 'JA',
      auth_key: process.env.auth, 
    },

  }
  const result = await axiosInstance.post('https://api.deepl.com/v2/translate',parameter)
  return(result)
};