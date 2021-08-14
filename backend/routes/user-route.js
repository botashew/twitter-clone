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
router.post('/signup', (req, res) => {
    const { name, email, password, password2 } = req.body
    let errors = []

    // Check required fields
    if(!name || !email || !password || !password2){
        errors.push({ msg: 'Please fill in all fields'})
    }

    if(password !== password2){
        errors.push({ msg: 'Passwords don\'t match'})
    }

    if(errors.length > 0){
        res.send({
            errors,
            name,
            email,
            password,
            password2
        })
    }
    else{

        // Validation passed
        UserService.findOne({ email: email})
        .then(user => {
            if(user){
                errors.push({ msg: 'Email is already registered' })
                res.send({
                    errors,
                    name,
                    email,
                    password,
                    password2
                })
            }else{
                const newUser = new UserService.model({
                    name,
                    email,
                    password
                })
                
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err

                        // Hash password
                        newUser.password = hash

                        // Save user
                        newUser
                            .save()
                            .then(user => {
                                req.flash(
                                    'success_msg',
                                    'You are now registered and you can log in'
                                )
                                res.redirect('/user/login')
                            })
                            .catch(err => console.log(err))
                    })
                })
            }
        })
    }
})



// Log In Method
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/user/dashboard',
        failureRedirect: '/user/login',
        failureFlash: true 
    })(req, res, next)
})



// Dashboard (Home page in Twitter)
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard', {
        user: req.user
    })
})




// Log out Method
router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success_msg', 'You are logged out')
    res.redirect('/user/login')
})

module.exports = router