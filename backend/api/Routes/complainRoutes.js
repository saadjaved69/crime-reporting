const express = require('express')
const Complaint = require('../model/complain.model')
const Route = express.Router()


Route.get('/complaint' , async  (req , res) => {
    
     const complains = await Complaint.find({})
     res.send(complains)

})


Route.post('/complaint' , async (req , res) => {
  
     try {
     
          const complain = await Complaint(req.body).save()
          
          res.send(complain)

        
        
     }catch(e){
         res.send(e.message)
     } 
})






module.exports = Route