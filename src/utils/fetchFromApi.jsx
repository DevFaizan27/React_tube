import axios from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '49301d2a88mshe7b65f527437a25p184a9fjsn0f7d005f2590',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };



  export const fetchFromApi=async(url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options)
    return data;
  }