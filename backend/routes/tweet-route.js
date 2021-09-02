const express = require('express')
const router = express.Router()
const TweetService = require('../services/tweet-service')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false})
const UserService = require('../services/user-service')

router.get('/all/json', async (req, res) => {
    const tweets = await TweetService.findAll()
    res.send(tweets)
})

// Write Tweets
router.post('/:id/write-tweet', urlencodedParser, async (req, res) => {
    try{
        const user = await UserService.findById(req.params.id)
        const tweet = await TweetService.add(req.body)
        await TweetService.toTweet(user, tweet)
        res.status(201).json(tweet)
    }catch(err){
        console.log(err)
        res.status(400).json({err: 'Tweet error'})
    }
    
})


module.exports = router