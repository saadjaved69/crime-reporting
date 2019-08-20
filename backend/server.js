const express = require('express')
const app = express()
// const userRoutes = require('./routes/UserRoutes')
require('./api/db/mongoose')
const cors = require('cors')
const mongoose = require('mongoose')
const complaintRoute = require('./api/Routes/complainRoutes')
const profileRoute = require('./api/Routes/profileRoutes')


app.use(cors())

app.use(express.json())
app.use(complaintRoute)
app.use(profileRoute)


// app.use(userRoutes)




app.listen('8000' , () => console.log('port is running on port 8000'))