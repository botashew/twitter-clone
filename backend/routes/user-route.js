const express = require('express')
const router = express.Router()
const UserService = require('../services/user-service')
const userModel = require('../models/users-model.js')
const jwt = require('jsonwebtoken')


const getErrors = (err) => {
    let errors = {name: '', username: '', email: '', password: ''}

    if(err.message === 'Incorrect email'){
        errors.email = 'That email is not registered'
    }
    if(err.message === 'Incorrect password'){
        errors.password = 'That password is incorrect'
    }

    if(err.message.includes('User validation failed')){
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        }) 
    }

    return errors
}

// Create token
const maxAge = 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({ id }, 'botashew secret', { expiresIn: maxAge})
}

// Sign Up Method
router.post('/signup', async (req, res) => {
    const { name, username, email, password } = req.body
    try{
        const user = await UserService.add({name, username, email, password})
        res.status(201).json({ user: user._id })
    }catch(err){
        const errors = getErrors(err)
        res.status(400).json({errors})
    }
})

// Log In Method
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    
    try{
        const user = await userModel.login(email, password)
        const token = createToken(user)
        res.cookie('token', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(200).json({ 
            user: user,
            token: token 
        })
    }catch(err){
        const errors = getErrors(err)
        res.status(400).json(errors)
    }
})

module.exports = router