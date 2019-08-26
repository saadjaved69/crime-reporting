class ComplaintActions {
   
    static  GET_COMPLAINTS = "GET_COMPLAINTS"
    static  GET_COMPLAINTS_SUCCESSFULL = "GET_COMPLAINTS_SUCCESSFULL"
    static  GET_COMPLAINTS_ERROR = "GET_COMPLAINTS_ERROR"


    static getComplaints() {
        return {
            type : this.GET_COMPLAINTS,
            
        }
    }

    static getComplaintSuccessfull(data) {
        return {
            type : this.GET_COMPLAINTS_SUCCESSFULL,
            payload : data.mycomplaints
            
        }
    }

    static getComplaintsError() {
        return {
            type : this.GET_COMPLAINTS,
            
        }
    }
}


export default ComplaintActions