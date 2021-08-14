const express = require('express')
const router = express.Router()
const TweetService = require('../services/tweet-service')
router.get('/', async (req, res) => {
    const tweets = await TweetService.findAll()
    res.render('home', {tweets: tweets})
})

module.exports = router