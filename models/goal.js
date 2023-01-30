
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

		// steps: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: 'Goal'
        //     }
		// ]
	},
	{
		timestamps: true,
	}
)


const Goal = mongoose.model('Goal', goalSchema)

module.exports = Goal
