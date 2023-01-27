
const express = require('express')
const mongoose = require('mongoose')

const db = require('./config/db')
constPORT = 8000

mongoose.set ('strictQuiery', true)

mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const app = express()

app.use(express.json())

app.listen(PORT, () => {
	console.log('listening on port ' + PORT)
})

module.exports = app