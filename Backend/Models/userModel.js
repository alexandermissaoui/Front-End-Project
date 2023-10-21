const User = require('../Schemas/userSchema')

/*
  GET /api/users
  hämtar alla användare
*/
exports.getAllUsers = (req, res) => {
  User.find()
    .then(data => {
      res.status(200).json(data)
    })
}

/*
  POST /api/users
  skapar en ny användare
*/
exports.createNewUser = (req, res) => {
  const {firstName, lastName, email, password} = req.body

  User.create({firstName, lastName, email, password})
    .then(data => {
      res.status(201).json(data)
    })

}

/*
  GET /api/users/:id
  hämtar en användare med hjälp av id
*/
exports.getUserById = (req, res) => {

  User.findOne({ _id: req.params.id })
    .then(data => {
      res.status(200).json(data)
    })
}