const TweetModel = require('../models/tweets-model')
const BaseService = require('./base-service')

class TweetService extends BaseService {
    model = TweetModel

    async toTweet(user, tweet){
        tweet.byUser.push(user)
        await tweet.save()
    }
}

module.exports = new TweetService