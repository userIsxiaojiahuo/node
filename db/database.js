const mongoo = require("mongoose");
const url = "mongodb://127.0.0.1:27017/student";
mongoo.connect(url, {useNewUrlParser: true});
module.exports = {
    mongoo
}