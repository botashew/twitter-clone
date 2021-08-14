const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema({
    byUser: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: false,
        autopopulate:{
            maxDepth: 1
        }
    }],
    tweet: {
        type: String,
        required: true,
        minLength: 1
    },
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
})

TweetSchema.plugin(require('mongoose-autopopulate'))

const TweetModel = mongoose.model('Tweet', TweetSchema)

module.exports = TweetModel