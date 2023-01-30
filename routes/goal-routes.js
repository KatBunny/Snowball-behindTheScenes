
const mongoose = require('mongoose')

const stepsSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		details: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = stepsSchema



// const stepsSchema = require('./steps')





const express = require('express')
const router = express.Router()


// const Goal = require('../models/goal')
// const { handle404 } = require('../lib/custom-errors')

// router.post('/steps', (req, res, next) => {
// 	const goalId = req.body.note.goalId

// 	Goal.findById(goalId)
// 		.then(handle404)
// 		.then((goal) => {
// 			goal.steps.push(req.body.steps)

// 			return goal.save()
// 		})

// 		.then((goal) => res.status(201).json({ goal: goal }))
// 		.catch(next)
// })

// module.exports = Goal

module.exports = router


// const stepsRoutes = require('./routes/steps-routes')

// app.use(steps.Routes)

// const mongoose = require('mongoose')

// const Schema = mongoose.Schema

// const goalSchema = new Schema(
// 	{
// 		name: {
// 			type: String,
// 			required: true,
// 		},
//         steps: [
//             {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: ''
//             }
//         ]
// 	},
// 	{
// 		timestamps: true,
// 	}
// )

// const Campaign = mongoose.model('Campaign', campaignSchema)

// module.exports = Campaign
// // After we have the relationship in the schema set up we can now push character id to it. Inside of campaign-routes.js:

// // UPDATE
// // PATCH /campaigns/5a7db6c74d55bc51bdf39793
// router.patch('/campaigns/:id', (req, res, next) => {

//     const characterID = req.body.campaign.characterID
//     delete req.body.campaign.characterID

// 	Campaign.findById(req.params.id)
// 		.then(handle404)
// 		.then((campaign) => {
//             if (characterID){
//                 campaign.characters.push(characterID)

//                 goal.save()
//             }

// 			return goal.updateOne(req.body.goal)
// 		})
// 		.then(() => res.sendStatus(204))
// 		.catch(next)
// })
