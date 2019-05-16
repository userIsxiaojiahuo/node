
class Page {
    constructor() {
        this.vessel = $(".formCon")
        this.createUI()
    }

    createUI(flag) {
        if (!flag) {
            new Register(this.vessel)
        } else {
            new Login(this.vessel)
        }
    }
}

let show = new Page()