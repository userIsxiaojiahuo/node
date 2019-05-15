// function Page() {
//     this.container = $(".formCon");
// }
//
// Page.prototype = {
//     init: function () {
//         this.createUI()
//     },
//     createUI: function (flag) {
//         if (!flag) {
//             this.register = new Register(this.container);
//         }else{
//             this.register = new Login(this.container);
//         }
//     }
// }
//
// new Page().init()

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