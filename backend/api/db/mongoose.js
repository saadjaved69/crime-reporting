const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://profile-wishlist:Prototype123@cluster0-juj6b.mongodb.net/test?retryWrites=true&w=majority" , {useNewUrlParser : true , useCreateIndex : true} )

const db = mongoose.connection
db.once('open' , () => console.log("database connected")
 )



module.exports = mongoose 