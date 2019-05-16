const getCookie = (req, key) => {
    let cookies = req.headers.cookie;
    let newArr = cookies.split("; ");
    for (let newArrKey in newArr) {
        let arr = newArr[newArrKey].split("=");
        if (arr[0] == newArrKey) {
            return arr[1]
        }
    }
}

module.exports = {
    getCookie
}