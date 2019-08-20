import React, { Component } from 'react';
import '../css/complaintfile.css'
import axios from 'axios'


class ComplaintFile extends Component {
    
    state = { 
        name : '',
        age: '',
        height : '',
        photo : ''
     }
    
    
    onChangeHandler = (e) => {
       this.setState({
           [e.target.name] : e.target.value
       }) 
   }


    Submit = (e) => {
      e.preventDefault()
      console.log('work')
      
      let obj = {
          name : this.state.name,
          age : this.state.age,
          height : this.state.height,
                    
      }

      axios.post('http://localhost:8000/complaint' , obj).then(data => console.log(data.data))

    //   console.log(obj)
       window.location.href = '/home'
    }



    render() { 
        return (
         
          <div className="container">  
           <hr/>
            <form onSubmit={this.Submit}>
               <div className="form-group">
                   <label>Name:</label>
                   <input name="name" value={this.state.name} type="text" className="form-control" onChange={ this.onChangeHandler } />
               </div>
               <div className="form-group">
                   <label>Age:</label>
                   <input type="number" className="form-control" name="age"  onChange={ this.onChangeHandler } />
               </div>
               <div className="form-group">
                   <label>height:</label>
                   <input type="text" className="form-control" name="height"  onChange={ this.onChangeHandler } />
               </div>
               {/* <div className="form-group">
                   <label>photo:</label>
                   <input type="file" className="form-control"/>
               </div> */}
                
               <input type="submit" value="SUBMIT" className="btn btn-primary" /> 
            </form>
            </div> 
         );
    }
}
 
export default ComplaintFile;