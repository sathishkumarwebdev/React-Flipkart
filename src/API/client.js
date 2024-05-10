import axios from "axios";
// export const productClient = axios.create({ baseURLurl:process.env.REACT_APP_BASE_URL });
const url = "https://dummyjson.com";
export const productClient = axios.create({
  url,
});
productClient.interceptors.request.use((config)=>{
    config.headers.Authorization = `Berear ${localStorage.getItem(
      "token"

    )}`;
    return config; 
},(err)=>{ return Promise.reject(err);

})