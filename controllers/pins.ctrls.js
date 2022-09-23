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

// create a pin with req.body
const create = (req, res) => {
   db.Pin.create(req.body, (error, createdPins) =>{
      if(error) return res.status(400).json({error: error.message})

      return res.status(200).json(createdPins)
   })
  res.send('create route')
}

// destroy a single pin by its ID
const destroy = (req, res) => {
//   res.send('destroy route')
   db.Pin.findByIdAndDelete(req.params.id, (err, deletedPin) => {
      if(err) return res.status(400).json({error: error.message})
      return res.status(200).json({
         message: `Pin ${deletedPin.name} deleted successfully`
      })
   })
}
// Created destroy route //


const update = (req, res) => {
//   res.send('update route')
   db.Pin.findByIdAndUpdate(req.params.id, 
      { $set: req.body },
      { new: true },
      (err, updatedPin) => {
         if(err) return res.status(400).json({error: err.message})
         return res.status(200).json(updatedPin)
      }
   )
}

module.exports = {
   index,
   create,
   destroy,
   update
}
