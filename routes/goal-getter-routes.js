const express = require('express')
const bcrypt = require('bcrypt')
const GoalGetter = require('../models/goalGetter')
const { createGoalGetterToken } = require('../config/auth')
const router = express.Router()

router.post('/sign-up', (req, res, next) => {
    bcrypt
        .hash(req.body.credentials.password, 10)
        .then(hashedPassword => {
            return {
                email: req.body.credentials.email,
                password : hashedPassword
            }
        })
        .then(goalGetter => GoalGetter.create(goalGetter))
        .then(goalGetter => {
            res.status(201).json({ goalGetter: goalGetter })
        })
        .catch(next)
})

router.post('/sign-up', (req, res, next) => {
    GoalGetter.findOne({ email: req.body.credentials.email })
        .then(goalGetter => createGoalGetterToken(req, goalGetter))
        .then(token => res.json({ token:token }))
        .catch(next)
})
module.exports = router