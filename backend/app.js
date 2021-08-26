const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser =require('body-parser')
const HomeRoute = require('./routes/home-route')
const UserRoute = require('./routes/user-route')
const TweetRoute = require('./routes/tweet-route')
const flash = require('connect-flash') 
const session = require('express-session')
const passport = require('passport')

// Passport config
require('./config/passport')(passport)


require('./mongo-connection')

app.set('view engine', 'pug')
// Body Parser
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false } ))

// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// Password middleeware
app.use(passport.initialize())
app.use(passport.session())

//  Connect Flash
app.use(flash())

// Global vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
})


app.use(cors())

app.get('/', (req, res) => {
    res.redirect('/home')
})


app.use('/home', HomeRoute)
app.use('/user', UserRoute)
app.use('/tweets', TweetRoute)


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server listening on port: ' + port)
})