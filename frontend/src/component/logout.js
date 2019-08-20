

const Logout = () => {
    
         
    localStorage.removeItem('token') 
    localStorage.removeItem('username') 
    window.location.href = "/"
}
 
export default Logout;