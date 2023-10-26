const express = require('express')
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use('/api/users', require('./Controllers/userController'));




module.exports = app;