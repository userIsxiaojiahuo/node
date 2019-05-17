let str3 = `
<div class="addJob-body">
    <form id="addForm">
        <div class="form-group">
            <label for="job_addJob_name">职位名称</label>
            <input type="text" class="form-control" id="job_addJob_name" placeholder="请输入职位名称">
        </div>
        <div class="form-group">
            <label for="job_addJob_price">薪资</label>
            <input type="text" class="form-control" id="job_addJob_price" placeholder="薪资范围">
        </div>
        <div class="form-group">
            <label for="job_addJob_ask">要求</label>
            <input type="text" class="form-control" id="job_addJob_ask" placeholder="招聘要求">
        </div>
        <div class="form-group">
            <label for="company_addJob_name">公司名称</label>
            <input type="text" class="form-control" id="company_addJob_name" placeholder="请输入公司名称">
        </div>
        <div class="form-group">
            <label for="logo_addJob">上传公司logo</label>
            <input type="file" id="logo_addJob" multiple>
        </div>
        <button type="submit" class="btn btn-primary">添加职位</button>
    </form>
</div>`

class AddJob {
    constructor(obj) {
        this.obj = obj
        this.createUI();
        this.addEvent();
    }

    createUI() {
        this.op = $("<div></div>");
        this.op.append(str3);
        this.obj.append(this.op);
    }

    addEvent() {
        this.op.find("#addForm").on("submit", this.addJobCallBack.bind(this));
    }

    addJobCallBack(e) {
        e.preventDefault();
        let jobName = this.op.find("#job_addJob_name");
        let jobPrice = this.op.find("#job_addJob_price");
        let jobAsk = this.op.find("#job_addJob_ask");
        let comanyName = this.op.find("#company_addJob_name");
        let jobLogo = this.op.find("#logo_addJob");

        var fromData = new FormData()
        fromData.append("jobName", jobName.val());
        fromData.append("jobPrice", jobPrice.val());
        fromData.append("jobAsk", jobAsk.val());
        fromData.append("comanyName", comanyName.val());
        fromData.append("jobLogo", jobLogo[0].files[0]);

        $.ajax({
            type: "post",
            url: "join/addJob",
            data: fromData,
            cache: false,
            contentType: false,
            processData: false,
            success: this.callback.bind(this)
        })
    }

    callback(data) {
        if (data.state) {
            alert("添加成功");
            new Page($(".tabList")).judeShow(1);
            new Page($(".tabList")).showSec(1);
        } else {
            alert("添加失败");
        }
    }
}

