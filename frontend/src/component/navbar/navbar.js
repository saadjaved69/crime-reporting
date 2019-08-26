import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    
    const userName = localStorage.getItem('username')
    
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/home">Missing-person-finder</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-item nav-link active" to="/home">Home <span className="sr-only">(current)</span></Link>
           
            { 
                localStorage.getItem('token') ? 
                 <React.Fragment>
                    <Link className="nav-item nav-link" to="/complaintfile">complaint file</Link>
                     <Link className="nav-item nav-link">{userName}</Link>
                     <Link className="nav-item nav-link" to="/logout">logout</Link>
                 </React.Fragment>
                 : 
                 
                 <React.Fragment> <Link className="nav-item nav-link" to="/login">login</Link>
                <Link className="nav-item nav-link" to="/signup">signup</Link> </React.Fragment>}   
                
                
            </div>
            </div>
          </nav>
        </div>
     );
}
 
export default Navbar;