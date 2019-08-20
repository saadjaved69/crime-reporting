const mongoose = require('mongoose')



const complaintSchema = new mongoose.Schema({
    
    name : {
        type : String,
        required : true
    },

    age : {
        type : Number,
        required : true
    },

    height : {
        type : Number ,
        required : true
    },

    picture : {
        type : Buffer
    }
} , { timestamps : true } )

const Complaint = mongoose.model('Complaint' , complaintSchema)

module.exports = Complaint