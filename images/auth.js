const passport = require('passport')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || ''
const { Strategy, ExtractJwt } = require('passport-jwt')
const opts ={
    jwtFromRequest : ExtractJwt.fromAuthHeadersAsBearerToken(),
    secretOrKey: secret, 
}
const User = require('../models/user')
const strategy = new Strategy(opts, function(jwt_payload, done){
    User.findByID(jwt_payload.id)
    .then((user) => done(null, user))
    .catch((err) => done(err))
})

passport.use(strategy)
passport.initialize()

const requireToken = passport.authenticate('jwt', { session: false})

const createUserToken = (req, user) => {
    if (
        !user ||
        !req.body.credentials.password ||
        !bcrypt.compareSync(req.body.credentials.password, user.password)
    ) {
        const err = new Error ('')
        err.statusCode = 422 
        throw err
    }
    returnjwt.sign({ id: user._id }, secret, {
        expiresIn: 3600 })
}

module.exports = {
    requireToken, 
    createUserToken,
}