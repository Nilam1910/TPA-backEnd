const db = require("../models")
const bcrypt = require('bcrypt');

const register = (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  db.User.findOne({username: req.body.username}, (err, userExists) => {
    if(userExists) {
      res.send('that username is taken')
    } else {
      db.User.create(req.body, (error, createdUser) => {
        res.status(201).json(createdUser)
      })
    }
  })
}



const signin = (req, res) => {
  db.User.find({username: req.body.username}, (err, foundUser) => {
    if(foundUser) {
      const validLogin = bcrypt.compareSync(req.body.password, foundUser.password)
      if (validLogin) {
        req.session.currentUser = foundUser
    } else {
      res.send('Invalid username or password')
    }
  } else {
    res.send('Invalid username or password')
  }
  })
}

const signout = (req, res) => {
  req.session.destroy(() => {
      res.status(200).json({ msg: 'users logged out' })
  })
}

module.exports = {
   register,
   signin,
   signout
}
