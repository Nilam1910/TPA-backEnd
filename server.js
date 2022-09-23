/* == Express Instance == */
const express = require ("express")

const app = express()
/* == Internal Modules == */
const routes = require('./routes')

require('dotenv').config()

/* == Port == */
const PORT = process.env.PORT || 3001;

app.use("/pins", routes.pins)

/* == Middleware == */
app.use(express.json())
app.use(express.urlencoded({extended: true}))

/* == Routes == */
app.use("/pins", routes.pins)

/* == DB connection == */
require('./config/db.connection');


app.listen (PORT, () => {
    console.log(" Connected! ")
})
