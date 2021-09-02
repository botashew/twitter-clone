const jwt = require('jsonwebtoken')
// const User = require('../models/user')

function isLogedIn(token){
    // check json web token exists
    if(token){
        // is token verified
        jwt.verify(token, 'botashew secret', (err, decodedToken) => {
            if(err){
                console.log(err.message)
                return "ali"
            }else{
                console.log(decodedToken)
                return "akbar"
            }
        })
    }
    else{
        return "ali"
    }
}

// ckeck current user
// const checkUser = (req, res, next) => {
//     const token = req.cookies.jwt
//     if(token){
//         jwt.verify(token, 'akbar secret', async (err, decodedToken) => {
//             if(err){
//                 console.log(err.message)
                
//             }
//             else{
//                 // console.log(decodedToken)
//                 let user = await User.findById(decodedToken.id)
//                 res.locals.user = user
//                 console.log(res.locals.user)
//                 next()
//             }

//         })
//     }else{
//         res.locals.user = null
//         next()
//     }
// }

module.exports = { isLogedIn }