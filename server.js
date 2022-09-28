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

require('dotenv').config()

/* == Port == */
const PORT = 3001;

/* == Routes == */
app.use("/pins", routes.pins)
app.use("/users", routes.users)

/* == Middleware == */
app.use(cors("*"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

/* == DB connection == */
require('./config/db.connection');


app.listen (PORT, () => {
    console.log(" Connected! ")
})
