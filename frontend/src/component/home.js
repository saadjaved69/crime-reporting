import React, { Component } from 'react';
import Axios from 'axios';



const ListComplain = props => {
    return ( 
        <div>
            <h4> Name: { props.complain.name } </h4>
            <h4> Age: {props.complain.age} </h4>
            <h4> Height: {props.complain.height} inches </h4>
            <h4> Complaint created At : {props.complain.createdAt.substring(0,10) } </h4>
            
            <hr/>
            <hr/>
        </div>
     );
}
 


class Home extends Component {
    
    state = { 
       complaints : []
     }

     componentDidMount() {
         Axios.get('http://localhost:8000/complaint').then(data => {
             
             this.setState({
                 complaints : data.data
             })  
         
                console.log(data.data)
            
        })
     }

    render() { 
        return ( 
                <div className="container" >
                     <br/>
                     <br/>
                     <h1 style={ {color : "lightblue"} }>List of missing person complaints</h1>
                     <hr/>
                      {this.state.complaints.map((complain) => { 
                         
                           return <ListComplain complain={complain} key={complain._id} /> 
                          
                        })}

                </div>
                
                );
    }
}
 
export default Home;