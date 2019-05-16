const tokens = require("jsonwebtoken");

const createToken = (tokenInfo, sec) => {
    return tokens.sign(tokenInfo, sec, {expiresIn: 60 * 60})
}

// 获取cookie

const tokenGet = (token, sec, callback) => {
    tokens.verify(token, sec, (err, decode) => {
        callback(err)
    })
}

module.exports = {
    createToken,
    tokenGet
}