const db = require("../models")

// get all the pins
const index = (req, res) => {
   db.Pin.find({}, (err,
      pins) => {
         if(err) return res.status(404).json({error: err.message})
         return res.status(200).json({
            pins,
            requestedAt: new Date().toLocaleDateString()
         })
      })
}




const create = (req, res) => {
   db.Pin.create(req.body, (error, createdPins) =>{
      if(error) return res.status(400).json({error: error.message})

      return res.status(200).json(createdPins)
   })
  res.send('create route')
}

// Created create route //






const destroy = (req, res) => {
  res.send('destroy route')
}

const update = (req, res) => {
  res.send('update route')
}

module.exports = {
   index,
   create,
   destroy,
   update
}
