import ComplaintAction from '../Action/complaintAction'
import axios from 'axios'


class ComplaintMiddleware {
    static getComplaints () {
        return (dispatch) => {
             
            dispatch(ComplaintAction.getComplaints())
            
                axios.get('http://localhost:8000/complaint')
                .then(res => {
                    console.log( 'middleware , ' , res.data)
                    dispatch(ComplaintAction.getComplaintSuccessfull({
                    mycomplaints : res.data
                }))
            })
               .catch(err => console.log(err))
       
        }
    }
}


export default ComplaintMiddleware