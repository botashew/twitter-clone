const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser =require('body-parser')
const HomeRoute = require('./routes/home-route')
const UserRoute = require('./routes/user-route')
const TweetRoute = require('./routes/tweet-route')

require('./mongo-connection')

app.set('view engine', 'pug')
// Body Parser
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false } ))

app.use(cors())

app.get('/', (req, res) => {
    res.send('Rest API for Twitter-Clone')
})

app.use('/home', HomeRoute)
app.use('/user', UserRoute)
app.use('/tweet', TweetRoute)


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server listening on port: ' + port + '...')
})