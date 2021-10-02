const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb+srv://akbar:123@cluster0.pqgki.mongodb.net/tweetter-clone?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log('Connecting to mongoDB...')
}

main()