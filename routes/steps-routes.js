const express = require('express')
const Goal = require('../models/goal')
const { handle404 } = require('../lib/custom-errors')
const { requireToken } = require('../config/auth')
const router = express.Router()


router.post('/stepss', (req, res, next) => {
    const goalId = req.body.steps.goalId
    console.log( req.user)
    const steps = req.body.steps
    steps.owner = req.goalGetter._id
    Goal.findById(goalId)
        .then(handle404)
        .then(goal => {
            goal.stepss.push(steps)
            return goal.save()
        })
        .then(goal => {
            res.status(201).json({ goal: goal })
        })
        .catch(next)
})


router.patch('/stepss/:stepsId', (req, res, next) => {
    const goalId = req.body.steps.goalId

    const stepsBody = req.body.steps

    Goal.findById(goalId)
        .then(handle404)
        .then(goal => {
            const steps = goal.stepss.id(req.params.stepsId)
            steps.set(stepsBody)
            return goal.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

router.delete('/stepss/:stepsId', (req, res, next) => {
    const goalId = req.body.note.goalId

    Goal.findById(goalId)
        .then(handle404)
        .then(goal => {
            goal.steps.id(req.params.stepsId).remove()
            return goal.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router