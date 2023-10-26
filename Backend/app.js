const express = require('express')
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use('/api/users', require('./Controllers/userController'));
app.use('/api/accommodations', require('./Controllers/accommodationController'));




module.exports = app;