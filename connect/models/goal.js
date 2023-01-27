
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const goalSchema = new Schema(
	{
		goal: {
			name: String,
			required: true,
		},
		steps: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Goal'
            }
		]
	},
	{
		timestamps: true,
	}
)


const Goal = mongoose.model('Goal', goalSchema)
