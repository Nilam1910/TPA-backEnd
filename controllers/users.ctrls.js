const db = require("../models")

const register = (req, res) => {
  const salt = bcrypt.genSaltSync(10)
  req.body.password = bcrypt.hashSync(req.body.password, salt)
  User.findOne({username: req.body.username}, (err, foundUser) => {
    if(userExists) {
      res.send('that username is taken')
    } else {
      User.create(req.body, (err, createdUser) => {
        req.session.currentUser = createdUser
      })
    }
  })
}


const signin = (req, res) => {
  User.findOne({username: req.body.username}, (err, foundUser) => {
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
  req.session.destroy()
}

module.exports = {
   register,
   signin,
   signout
}
