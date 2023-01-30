// const express = require('express')
// const bcrypt = require('bcrypt')

// const User = require('../models/user')

// const router = express.Router()

// // POST /sign-up
// router.post('/sign-up', (req, res, next) => {
//     bcrypt
//         .hash(req.body.credentials.password, 10)
//         .then(hashedPassword => {
//             return {
//                 email: req.body.credentials.email,
//                 password: hashedPassword
//             }
//         })
//         .then(user => User.create(user))
//         .then(user => {
//             res.status(201).json({ user: user })
//         })
//         .catch(next)
// })

// module.exports = router