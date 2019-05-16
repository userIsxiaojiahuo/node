let str = `
  <div class="logo">
        <img src="https://cas.1000phone.net/cas/images/login/logo.png" alt="">
     </div>
     <form id="registerForm">
         <div class="form-group">
            <label for="exampleInputEmail1">用户名</label>
             <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入用户名">
         </div>
         <div class="form-group">
            <label for="exampleInputPassword1">密码</label>
             <input type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入密码">
        </div>
        <p class="placeText" id="skip">已注册，立即登录</p>
         <button type="submit" class="btn btn-default reginBtn">注册</button>
     </form>`;

class Register {
    constructor(obj) {
        this.obj = obj
        this.createsUI();
        this.clickSkip();
        this.formSubmit();
    }

    createsUI() {
        this.obj.html("");
        this.op = $("<div></div>");
        this.op.append(str);
        console.log(this.obj);
        this.obj.append(this.op);
    }

    clickSkip() {
        this.op.find("#skip").on("click", this.judgeDisplayBlock.bind(this));
    }

    judgeDisplayBlock() {
        show.createUI(true);
    }

    formSubmit(){
        this.op.find("#registerForm").on("submit", this.judgeRegister.bind(this));
    }
    judgeRegister(e){
        e.preventDefault();
        var username = this.op.find("#exampleInputEmail1").val();
        var password = this.op.find("#exampleInputPassword1").val();
        console.log(username,password)
        $.ajax({
            type:"post",
            url:"/users/register",
            data:{
                username,
                password
            },
            success:this.successfu.bind(this)
        })
    }
    successfu(data){
        if(data.state){
            alert("注册成功");
            show.createUI(true);
        }else{
            console.log(data)
            alert("注册失败");
        }
    }
}