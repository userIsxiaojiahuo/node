var express = require("express");
var router = express.Router();
var jobCon = require("../control/job");

var multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/img");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname)
    }
})

var upload = multer({storage: storage});

var cp = upload.fields([{name: "jobLogo", maxCount: 1}])

router.post('/addjob', cp, jobCon.addJob);
router.get('/jobList', jobCon.jobList);
router.get('/JobDele', jobCon.JobDele);
router.post('/JobSave', cp,jobCon.JobSave);

module.exports = router