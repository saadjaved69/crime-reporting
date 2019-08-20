const express = require('express')
const Route = express.Router()
const Profiles = require('../model/profile.model')


Route.get('/profiles' , async  (req , res) => {
    
    const profiles = await Profiles.find({})
    res.status(200).send(profiles)

})


Route.post('/profiles' , async (req , res) => {
 
    try {
    
         const profile = await Profiles(req.body).save()
         const token = await profile.generateAuthToken()
         
         res.status(201).send({profile , token})

       
       
    }catch(e){
        res.send(e.message)
    } 
})


Route.post('/profiles/login' , async (req , res) => {
 
    try {
    
         const profile = await Profiles.findByCredentials(req.body.email , req.body.password)
         const token = await profile.generateAuthToken()
         
         res.status(200).send({profile , token})

       
       
    }catch(e){
        res.send(e.message)
    } 
})

module.exports = Route