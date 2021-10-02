const express = require('express')
const router = express.Router()
const TweetService = require('../services/tweet-service')
const UserService = require('../services/user-service')

// Add Tweet
router.post('/write/:id', async (req, res) => {
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

// Get All Tweets
router.get('/all', async (req, res) => {
    const tweets = await TweetService.findAll()
    res.send(tweets)
})

// Get One Tweet
router.get('/:id', async (req, res) => {
    const tweet = await TweetService.findById(req.params.id)
    res.send(tweet)
})

module.exports = router