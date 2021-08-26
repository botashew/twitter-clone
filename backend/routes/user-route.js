const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false})
const UserService = require('../services/user-service')
const TweetService = require('../services/tweet-service')
const bcrypt = require('bcrypt')
const passport = require('passport')
const { ensureAuthenticated } = require('../config/auth')


// Get all data from DB
router.get('/all', async (req, res) => {
    const users = await UserService.findAll()
    res.render('list', {users: users})
})

// Write Tweets
router.post('/:id/write-tweet', urlencodedParser, async (req, res) => {
    const user = await UserService.findById(req.params.id)
    const tweet = await TweetService.add(req.body)
    await TweetService.toTweet(user, tweet)
    res.send(tweet)
})


// Get All data as JSON
router.get('/all/json', async (req, res) => {
    const users = await UserService.findAll()
    res.send(users)
})

// Login Form
router.get('/login', (req, res) =>{
     res.render('login')
})


// Sign Up form
router.get('/signup', (req,res) => {
    res.render('signup')
})


// Sign Up Method



// Log In Method



// Dashboard (Home page in Twitter)




// Log out Method

module.exports = router