import axios from "axios"
import { setHotel, setRole, setToken } from "../utils/AuthCheck"
import apiConfig from "./axiosConfig";

//api login
export const login = async (email, password) => {
   try {
      const response = await apiConfig.post('/customer/login',{email, password})
      console.log("response", response);
      setRole(response.data.role)
      setToken(response.data.token)
      if(response.data.hotel_id) setHotel(response.data.hotel_id)
      return response.data
   } catch (error) {
      if (error.status === 404) {
         return error.response.data
      } else console.error("Error: ", error)      
   }
}

//api register

//api authenticate

//api logout

export const authService = {
   login,
}

//CÁCH SỬ DỤNG


// const handleClick = async() => {
//    const dataLogin = await authService.login({
//        email: "lequangminh07072003@gmail.com",
//        password: "12345"
//    })
//    console.log(dataLogin)
// }