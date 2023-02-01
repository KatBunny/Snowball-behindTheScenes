
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const goalSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		timeframe: {
			type: Number,
			required: true,
		},
		purpose: {
			type : String, 
			required: true,
		},

		steps: [stepsSchema]
	},
	{
		timestamps: true,
	}
)


const Goal = mongoose.model('Goal', goalSchema)

module.exports = Goal
