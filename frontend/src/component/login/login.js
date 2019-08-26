import React, { Component } from 'react';
import axios from 'axios'


class Login extends Component {
    
    state = { 
        email : '',
        password : ''
     }


     onChangeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        }) 
    }

    onSubmit = (e) => {
       e.preventDefault()
       let obj = {
           email : this.state.email,
           password : this.state.password,
       } 


       axios.post('http://localhost:8000/profiles/login' , obj).then(res => {
           console.log(res.data)
           res.data === "unable to login"  ?  alert('your email or password is incorrect please type again')  : 


           localStorage.setItem('token' , res.data.token)
           localStorage.setItem('username' , res.data.profile.name)
           window.location.href = "/"
              
           
       })
       .catch(e => console.log(e.message))
       
       console.log(obj);
       
       
    }

    

    render() { 
        return ( 
            <div className="container">  
             <hr/>
            <form onSubmit={this.onSubmit}>
               <div className="form-group">
                   <label>Email:</label>
                   <input name="email" value={this.state.email} type="email" className="form-control" onChange={this.onChangeHandler}/>
               </div>
               <div className="form-group">
                   <label>Password:</label>
                   <input name="password" value={this.state.password} type="password" className="form-control" onChange={this.onChangeHandler} />
               </div>
               
               <input type="submit" value="login" className="btn btn-primary"/> 
            </form>
            </div>
         );
    }
}
 
export default Login;