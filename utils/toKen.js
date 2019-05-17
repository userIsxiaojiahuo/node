const token = require("jsonwebtoken");

const createToken = (tokenInfo, sec) => {
    return token.sign(tokenInfo, sec, {expiresIn: "7day"})
}

// 获取cookie

const tokenGet = (a, sec, callback) => {
    token.verify(a, sec, function (err) {
        callback(err)
    })
}

module.exports = {
    createToken,
    tokenGet
}