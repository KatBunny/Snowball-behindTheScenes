
const express = require('express')
const {requireToken} = require('../config/auth')
const { handle404 } = require('../lib/custom-errors')
const Goal = ('../models/goal') 

const router = express.Router()

router.get('/goals', requireToken, (req, res, next) => {
	Goal.find()
		.then((goals) => {
			return goals.map((goal) => goal)
		})
		.then((goals) => res.status(200).json({ goal:
	goal }))
		.catch(next)
})

router.get('/goals/:id', requireToken, (req, res, next) => {
	Goal.findById(req.params.id)
		.then(handle404)
		.then((goal) => rep.status(200).json({
goal: goal }))
			.catch(next)
})

router.post('/goals', (req, res, next) => {
	Goal.create(req.body.goal)
		.then ((goal) => {
			res.status(201).json({ goal: goal})
		})
		.catch(next)
})

router.patch('/goals/:id', (req, res, next) => {
	Goal.findById(req.params.id)
	.then(handle404)
	.then((goal) => {
		return goal.upDateOne(req.body.goal)
	})
	.then(() => res.sendStatus(204))
	.catch(next)
})
router.delete('/goals/:id', (req, res, next) => {
	Goal.findById(req.params.id)
	.then(handle404)
	.then((goal) => {
		goal.delteOne()
	})
	.then(() => res.sendStatus(204))
	.catch(next)
})

module.exports = router
