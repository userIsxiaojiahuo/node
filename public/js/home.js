class Home {
    constructor() {
        this.noLogin = $("#username");
        this.logOut = $("#js_logout");
        this.getUsername();
        this.quitOut();
    }

    // 获取登陆名拿到cookie
    getUsername() {
        if (Cookies("user")) {
            this.noLogin.text(Cookies("user"))
        }
    }

    // 退出登录，消除登录信息
    quitOut() {
        this.logOut.on("click", this.quitOutBtn.bind(this))
    }

    quitOutBtn() {
        if (this.noLogin.text() == Cookies("user")) {
            if (confirm("您确定要退出登录吗？")) {
                Cookies.remove("user");
                Cookies.remove("token");
                if (!Cookies("user")) {
                    location.href = "http://localhost:3000/index.html"
                }
            }
        }
    }
}

new Home()