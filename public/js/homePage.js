class Page {
    constructor(obj) {
        this.tabList = obj.children().children();
        this.jobHome = $("#jobHome");
        this.addJob = $("#addJob");
        this.jobList = $("#jobList");
        this.tab()
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
                break
            case 2:
                this.showSection(this.addJob);
                break
        }
    }

    showSection(obj) {
        obj.siblings().html("");
    }
}

new Page($(".tabList"))