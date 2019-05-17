class Page {
    constructor(obj) {
        this.tabList = obj.children().children();
        this.jobHome = $("#jobHome");
        this.jobList = $("#jobList");
        this.addJob = $("#addJob");
        this.tab();
    }

    tab() {
        this.tabList.on("click", this.cutClass.bind(this))
    }

    cutClass(e) {
        $(e.target).addClass("cur").siblings().removeClass("cur");
        let index = $(e.target).index();
        this.judeShow(index)
    }

    judeShow(index) {
        switch (index) {
            case 0:
                this.showSection(this.jobHome);
                break;
            case 1:
                this.showSection(this.jobList);
                if (this.jobList.html() == "") {
                    new JobList(this.jobList)
                }
                break
            case 2:
                this.showSection(this.addJob);
                if (this.addJob.html() == "") {
                    new AddJob(this.addJob);
                }
                break;
        }
    }

    showSection(obj) {
        obj.siblings().hide();
        obj.show()
    }

    showSec(index) {
        this.tabList.eq(index).addClass("cur").siblings().removeClass("cur");
    }
}

new Page($(".tabList"))