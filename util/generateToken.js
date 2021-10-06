const jwt = require('jsonwebtoken');
const SECRET_KEY = "Vineet12243247bidbchvdsuvcheg78g"
const generateWebToken = (id)=>{
    return jwt.sign({id}, SECRET_KEY, {
        expiresIn:'30m'
    })
}

module.exports = generateWebToken;