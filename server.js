/* == Express Instance == */
const express = require ("express")

const app = express()
/* == Internal Modules == */
const routes = require('./routes')

/* == Port == */
const PORT = process.env.PORT || 3001;



/* == Middleware == */
app.use(express.json())
app.use(express.urlencoded({extended: true}))

/* == Routes == */
app.use("/pins", routes.pins)

app.listen (PORT, () => {
    console.log(" Connected! ")
})
