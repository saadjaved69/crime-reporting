import React, { Component } from 'react';
import Navbar from './component/navbar/navbar'
import Complaintfile  from './component/compaintfile/compaintfile'
import Login from './component/login/login'
import Logout from './component/logout/logout'
import Home from './component/home/home'
import { BrowserRouter as Router , Route , Redirect} from 'react-router-dom';
import Signup from './component/signup/signup';
import './App.css'


class App extends Component {
 
  state = {
       
  }
  
  
  

  render(){
    return (
     <div> 
       <Router>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          {localStorage.getItem('token') ? 
          <Route path="/complaintfile" component={Complaintfile}  /> : <Redirect to="/login"/>}  
          
          <Route path="/login" component={Login}  />
          <Route path="/signup" component={Signup} />
          <Route path="/logout" component={Logout} />
       </Router>
       
      </div>  
    );
  }
}



export default App;
