const mongoose = require('mongoose');

const pinSchema = new mongoose.Schema({
  username: { type: String, required: true},
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max:5},
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  image: {type: Buffer, required: true},
  imageType: {type: String, required: true},
},
  { timestamps: true }
)

const Pin = mongoose.model('Pin', pinSchema)

module.exports = Pin;
