const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        minLenght: 2
    },
    email: {
        type: String,
        required: [true, 'Please enter an email']
    },
    password: {
        type: String,
        required: [true, 'Please create a password']
    },
    date: {
        type: Date,
        default: Date.now 
    }
})



// Functions before doc saved to db
UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

// Functions after doc saved to db


// Static functions
UserSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    if(user){
        const auth = await bcrypt.compare(password, user.password)
        if(auth){
            return user
        }
        throw Error('Incorrect password')
    }
    throw Error('Incorrect email')
}

UserSchema.plugin(require('mongoose-autopopulate'))
const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel