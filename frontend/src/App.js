import React, { Component } from 'react';
import Navbar from './component/navbar'
import Complaintfile  from './component/compaintfile'
import Login from './component/login'
import Logout from './component/logout'
import Home from './component/home'
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Signup from './component/signup';
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
          <Route path="/complaintfile" component={Complaintfile}  />
          <Route path="/login" component={Login}  />
          <Route path="/signup" component={Signup} />
          <Route path="/logout" component={Logout} />
       </Router>
       
      </div>  
    );
  }
}

export default App;
