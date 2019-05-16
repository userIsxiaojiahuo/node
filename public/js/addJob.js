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
        this.createUI()
    }

    createUI() {
        this.op = $("<div></div>");
        this.obj.append(this.op);
        this.op.append(str3);
    }
}

new AddJob($("#addJob"))
