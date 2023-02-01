
const express = require('express')

const mongoose = require('mongoose')

const db = require('./config/db')

const PORT = 8000

const goalRoutes = require('./routes/goal-routes')

mongoose.set('strictQuery', true)

mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const app = express()

app.use(express.json())

app.use(goalRoutes)

app.listen(PORT, () => {
	console.log('listening on port ' + PORT)
})

module.exports = app