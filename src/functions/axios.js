import axios from "axios"


const server = axios.create({
     baseURL:"/api/web/",
     withCredentials:false
 })

 
export { server}