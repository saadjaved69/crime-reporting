import ComplaintAction from '../Action/complaintAction'



const complaintReducer = (state = {
    
    complaints : []

} , action) => {
     switch (action.type) {
         case ComplaintAction.GET_COMPLAINTS : 
             return Object.assign({} , state , {isLoading : true})
            
         case ComplaintAction.GET_COMPLAINTS_SUCCESSFULL :
           console.log(action.data)
             return Object.assign({} , state , {complaints : action.payload})
                 

         default:
             return state
             
     }
}

export default complaintReducer