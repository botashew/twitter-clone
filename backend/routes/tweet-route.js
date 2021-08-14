const express = require('express')
const router = express.Router()
const TweetService = require('../services/tweet-service')

router.get('/all/json', async (req, res) => {
    const tweets = await TweetService.findAll()
    res.send(tweets)
})

module.exports = router