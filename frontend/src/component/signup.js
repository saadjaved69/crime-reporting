import React, { Component } from 'react';
import axios from 'axios'


class Signup extends Component {
    state = { 
        name : '',
        email : '',
        password : ''
     }



    onChangeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        }) 
    }
    


    onSubmit = (e) => {
        e.preventDefault();
        let obj = {
            name : this.state.name,
            email : this.state.email ,
            password : this.state.password
        }

        axios.post('http://localhost:8000/profiles' , obj).then(res => { 
            
         console.log(res.data) 
         localStorage.setItem('token' , res.data.token)
         localStorage.setItem('username' , res.data.profile.name)
         window.location.href = "/"
        
        })

        // console.log(obj)

    }


    render() { 
        return ( 
            <div className="container">  
             <hr/>
            <form onSubmit={this.onSubmit}>
               <div className="form-group">
                   <label>Name:</label>
                   <input name='name' onChange={this.onChangeHandler} type="text" className="form-control" required/>
               </div>
               <div className="form-group">
                   <label>Email:</label>
                   <input name="email" onChange={this.onChangeHandler} type="email" className="form-control" />
               </div>
               <div className="form-group">
                   <label>password:</label>
                   <input name="password" onChange={this.onChangeHandler} type="password" className="form-control" required />
               </div>   
               <input type="submit" value="Signup" className="btn btn-primary"  /> 
            </form>
            </div>
         );
    }
}
 
export default Signup;