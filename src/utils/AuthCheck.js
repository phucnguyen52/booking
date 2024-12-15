import Cookies from "js-cookie";


export const isAuthenticated = () => !!Cookies.get("token");


export const hasRole = (role) => {
  const userRole = Cookies.get("role"); 
  console.log("role: ",userRole===role)
  return userRole === role;
};

export const setRole = (role) => {
  Cookies.set('role', role, {
    expires: 1, 
    path: '/',  
    secure: true,
    sameSite: 'Strict' 
  })
}