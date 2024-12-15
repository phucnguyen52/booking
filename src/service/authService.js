import axios from "axios"
import { setRole } from "../utils/AuthCheck"

//api login
export const login = async (data) => {
   try {
      const response = await axios.post('http://localhost:8080/api/customer/login', {
         ...data,
      }, { withCredentials: true })
      setRole(response.data.role)
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