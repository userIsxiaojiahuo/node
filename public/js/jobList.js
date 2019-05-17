class JobList {
    constructor(obj) {
        this.obj = obj
        this.createList();
    }

    createList() {
        $.ajax({
            type: "get",
            url: "/join/jobList",
            success: this.createListCb.bind(this)
        })
    }

    createListCb(data) {
        this.obj.html("1112233")
    }
}



