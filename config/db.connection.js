const mongoose = require('mongoose');

const connectionStr = process.env.MONGODB_URI

mongoose.connect(connectionStr, { useNewUrlParser: true });
// added quotes to co

// set up listeners to monitor your database connection
mongoose.connection.on('connected', ()=> console.log('DB connected... 🙌🙌🙌'));

mongoose.connection.on('error', (err)=> console.log(err.message));

mongoose.connection.on('disconnected', ()=> console.log('mongoose disconnected'));
