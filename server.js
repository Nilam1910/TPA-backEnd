/* == Express Instance == */
const express = require ("express")
/* == Express Instance == */
const app = express()
/* == Internal Modules == */
const routes = require('./routes')

/* == Bcrypt == */
const bcrypt = require('bcrypt')

//import cors
const cors = require('cors')
// whitelist & corsOptions
const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

require('dotenv').config()

/* == Port == */
const PORT = process.env.PORT || 3001;

app.use("/pins", routes.pins)
app.use("/users", routes.users)

/* == Middleware == */
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

/* == Routes == */
app.use("/pins", routes.pins)

/* == DB connection == */
require('./config/db.connection');


app.listen (PORT, () => {
    console.log(" Connected! ")
})
