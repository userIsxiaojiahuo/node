const userMo = require("../model/user");
const crypto = require("crypto");
const util = require("../utils/toKen");

const register = (req, res) => {
    const {username, password} = req.body;
    console.log({username, password})
    userMo.findUser({username}, (result) => {
        if (result > 0) {
            res.json({
                state: false,
                info: "用户名已存在"
            })
        } else {
            const hash = crypto.createHash("sha256");
            hash.update(password);

            userMo.saveUser({username, password: hash.digest("hex")}, (result) => {
                res.json({
                    state: true,
                    info: "注册成功"
                })
            })
        }
    })
}

const login = (req, res) => {
    const {username, password} = req.body;
    console.log(password)
    userMo.findUser({username}, (result) => {
        if (result) {
            const hash = crypto.createHash("sha256");
            hash.update(password);
            if (result.password == hash.digest("hex")) {
                const token = util.createToken({user: username}, "9527");
                res.cookie("token", token)
                res.cookie("user", username)
                res.json({
                    state: true,
                    info: "登陆成功"
                })
            } else {
                res.json({
                    state: false,
                    info: "密码错误"
                })
            }
        } else {
            res.json({
                state: false,
                info: "用户名不存在"
            })
        }
    })
}
module.exports = {
    register,
    login
}