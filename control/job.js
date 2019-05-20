const path = require("path");
const jobMoudel = require("../model/job");
const cookie = require("../utils/getCookie");
const opToken = require("../utils/toKen");

// 添加
const addJob = (req, res) => {
    const {jobName, jobPrice, jobAsk, comanyName} = req.body;
    const jobLogo = req.files.jobLogo[0].path;
    const url = "http://127.0.0.1:3000/img/" + path.parse(jobLogo).base;

    const toKens = cookie.getCookie(req, "token");
    opToken.tokenGet(toKens, "9527", (err) => {
        if (err) {
            res.json({
                state: false,
                info: "账号过期，请重新登录"
            })
        } else {
            jobMoudel.jobSave({jobName, jobPrice, jobAsk, comanyName, jobLogo: url}, () => {
                res.json({
                    state: true,
                    info: "添加成功"
                })
            })
        }
    })
}
const jobList = (req, res) => {
    console.log("aaaaaaaaaaa");
    const toKens = cookie.getCookie(req, "token");
    opToken.tokenGet(toKens, "9527", (err) => {
        if (!err) {
            jobMoudel.jobFind((data) => {
                res.json({
                    state: true,
                    data,
                    info: "1"
                })
            })
        }
    })
}

const JobDele = (req, res) => {
    const {id} = req.query;
    console.log({id} + "123456")
    const toKens = cookie.getCookie(req, "token");
    opToken.tokenGet(toKens, "9527", (err) => {
        if (!err) {
            jobMoudel.jobDele({_id: id}, (data) => {
                res.json({
                    state: true,
                    info: "删除成功"
                })
            })
        }
    })
}
//  改
const JobSave = (req, res) => {
    const {jobName, jobPrice, jobAsk, companyName, id} = req.body;
    const jobLogo = req.files.jobLogo[0].path;
    const url = "http://127.0.0.1:3000/img/" + path.parse(jobLogo).base;

    const toKens = cookie.getCookie(req, "token");
    opToken.tokenGet(toKens, "9527", (err) => {
        if (!err) {
            jobMoudel.jobAmend({_id: id}, {jobName, jobPrice, jobAsk, companyName, id, jobLogo: url}, (result) => {
                if (result.ok) {
                    res.json({
                        state: true,
                        info: "修改成功"
                    })
                }
            })
        }
    })
}

module.exports = {
    addJob,
    jobList,
    JobDele,
    JobSave
}




