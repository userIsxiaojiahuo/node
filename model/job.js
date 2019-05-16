const mongoose = require("../db/database").mongoo;
const Job = mongoose.model("message", {
    jobName: String,
    jobPrice: Number,
    jobAsk: String,
    comanyName: String,
    jobLogo: String
})

// 添加
const jobSave = (jobInfo, callback) => {
    const job = new Job(jobInfo);
    job.save().then(() => {
        callback()
    })
}
// 查找
const jobFind = (callback) => {
    Job.find().then((result) => {
        callback(result)
    })
}

// 删除

const jobDele = (jobInfo, callback) => {
    Job.remove(jobInfo).then((result) => {
        callback(result);
    })
}

// 改

const jobAmend = (jobId, jobInfo, callback) => {
    Job.update(jobId, {$set: jobInfo}).then((result) => {
        callback(result)
    })
}

module.exports = {
    jobSave,
    jobFind,
    jobDele,
    jobAmend
}