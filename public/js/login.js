let str2 = `
 <div class="logo">
        <img src="https://cas.1000phone.net/cas/images/login/logo.png" alt="">
    </div>
    <form id="loginForm">
        <div class="form-group">
            <label for="exampleInputEmail1">用户名</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入用户名">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">密码</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入密码">
        </div>
        <p class="placeText" id="skip">没账号？立即注册</p>
        <button type="submit" class="btn btn-default reginBtn">登陆</button>
    </form>
`;

class Login {
    constructor(obj) {
        this.obj = obj
        this.createsUI();
        this.clickSkip();
        this.formSubmit();
    }

    createsUI() {
        this.obj.html("");
        this.op = $("<div></div>");
        this.op.append(str2);
        this.obj.append(this.op);
    }

    clickSkip() {
        this.op.find("#skip").on("click", this.judgeDisplayBlock.bind(this));
    }

    judgeDisplayBlock() {
        show.createUI(false);
    }

    formSubmit() {
        this.op.find("#loginForm").on("submit", this.judgeRegister.bind(this));
    }

    judgeRegister(e) {
        e.preventDefault();
        var username = this.op.find("#exampleInputEmail1").val();
        var password = this.op.find("#exampleInputPassword1").val();
        $.ajax({
            type: "post",
            url: "/users/login",
            data: {
                username,
                password
            },
            success: this.successfu.bind(this)
        })
    }
    successfu(data) {
        if (data.state) {
            alert("登陆成功");
            location.href = "http://localhost:3000/home.html"
        } else {
            alert("登陆失败");
        }
    }
}