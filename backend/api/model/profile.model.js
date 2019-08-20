const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const ProfileSchema = new mongoose.Schema({
    
    name : {
        type : String,
        required : true
    },
    
     email: {
         type : String,
         unique : true,
         required : true
     },

     password: {
        type : String,
        required : true
    },

    tokens : [{
        token: {
            type : String ,
            required : true
            
        }
    }]

  
})


ProfileSchema.methods.generateAuthToken = async function (){

    const profile = this
  
    const token = jwt.sign({ _id: profile._id.toString() } , "secretKey" )
  
    profile.tokens = profile.tokens.concat({token})
  
    await profile.save()
    return token
  
  
  }
  

ProfileSchema.methods.toJSON =  function () {
    
    const profile = this 
    const publicProfileData = profile.toObject()
  
    delete publicProfileData.password
    delete publicProfileData.tokens
    
  
    console.log(publicProfileData)
  
    return publicProfileData
  
  }


  ProfileSchema.statics.findByCredentials = async (email , password) => {
    const profile = await Profiles.findOne({email})
  
    if(!profile){
      throw new Error("unable to login")
    }
  
    const isMatch = await bcrypt.compare(password , profile.password )
  
    if(!isMatch){
      throw new Error("unable to login")
    }


    return profile
  
  }


  ProfileSchema.pre('save' , async function(next) {
    const profile = this;
  
    // console.log(profile.password, "pre password");
  
    if(profile.isModified('password')){
      
      profile.password = await bcrypt.hash(profile.password, 8)
     
    }
  
  
    // console.log(profile.password, "hashed password")
  
    next();
  
  });
  



const Profiles = mongoose.model('Profiles' , ProfileSchema)

module.exports = Profiles