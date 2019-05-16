const mongoose = require("../db/database").mongoo;
const User = mongoose.model("users", {
    username: String,
    password: String
})

const findUser = (findInfo, cd) => {
    User.findOne(findInfo).then((result) => {
        cd(result)
    })
}

const saveUser = (findInfo, cd) => {
    const user = new User(findInfo)
    user.save().then((result) => {
        cd(result)
    })
}

module.exports = {
    findUser,
    saveUser
}