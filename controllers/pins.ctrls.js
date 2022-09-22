const db = require("..models")

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
   res.send("Get route is working")
 
}

module.exports = {
   index,
   create,
}
