const jwt = require('jsonwebtoken')
const userModel = require('../models/users-model')

const isLogedIn = (req, res, next) => {
    const token = req.cookies.auth
    // Is jwt exists
    if(token){
        // Is token verified
        jwt.verify(token, 'botashew secret', (err, decodedToken) => {
            if(err){
                console.log(err.message)
                return false
            }
            else{
                console.log(decodedToken)
                return true
            }
        })

    }
    else{
        return false
    }
} 

// Check current user
const checkCurrentUser = (req, res, next) => {
    const token = req.cookies.auth

    if(token){
        jwt.verify(token, 'botashew secret', async (err, decodedToken) => {
            if(err){
                console.log(err.message)
                res.locals.user = null
                next()
            }
            else{
                console.log(decodedToken)
                let user = await userModel.findById(decodedToken.id)
                res.locals.user = user
                next()
            }
        })
    }
    else{
        res.locals.user = null
        next()
    }
}

module.exports = { isLogedIn, checkCurrentUser}