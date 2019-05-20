class JobList {
    constructor(obj) {
        this.obj = obj
        this.createList();
        this.jobsave();
    }

    createList() {
        $.ajax({
            type: "get",
            url: "/join/jobList",
            success: this.createListCb.bind(this)
        })
    }

    createListCb(data) {
        console.log(data)
        let str = ""
        for (let i = 0; i < data.data.length; i++) {
            str += `
            <div class="list_job">
            <div class="job_des">
                 <div class="job_name">${data.data[i].jobName}</div>
                 <div class="job_price">${data.data[i].jobPrice}</div>
                 <div class="job_ex">${data.data[i].jobAsk}</div>
            </div>
            <div class="com_des">
                <div class="company_logo">
                    <img src="${data.data[i].jobLogo}"/>
                </div>
                <div class="company_name">${data.data[i].comanyName}</div>
            </div>
            <div class="operation" data-id="${data.data[i]._id}">
                <button class="btn btn-danger job_delete">删除</button>
                <button class="btn btn-info job_model" data-toggle="modal" data-target="#jobModel">修改</button>
            </div>
         </div>`
        }
        this.obj.html(str);
        this.jobListDele();
        this.SaveBtn();
    }

    jobListDele() {
        $(".job_delete").on("click", this.DeleteCallBack.bind(this))
    }

    DeleteCallBack(e) {
        let id = $(e.target).parent().attr("data-id");
        if (confirm("您确定要删除吗？")) {
            $.ajax({
                type: "get",
                url: "/join/JobDele",
                data: {
                    id
                },
                success: this.succCallBack.bind(this)
            })
        }
    }

    succCallBack(data) {
        if (data.state) {
            this.createList();
        }
    }

    SaveBtn() {
        $(".job_model").on("click", this.jobListSave.bind(this))
    }

    //修改按钮
    // job_modify_name
    //job_modify_price
    //job_modify_ask
    //company_modify_name
    //logo_modify
    jobListSave(e) {
        let id = $(e.target).parent().attr("data-id");
        console.log(id)
        let parent = $(e.target).parent().parent();

        let jobName = parent.find(".job_name").text();
        let jobPrice = parent.find(".job_price").text();
        let jobAsk = parent.find(".job_ex").text();
        let comanyName = parent.find(".company_name").text();

        $("#job_modify_name").val(jobName);
        $("#job_modify_price").val(jobPrice);
        $("#job_modify_ask").val(jobAsk);
        $("#company_modify_name").val(comanyName);
        $("#modifyJob").attr("data-id", id);
    }

    jobsave() {
        $("#modify_btn").on("click", this.jobsaveCallBack.bind(this))
    }

    jobsaveCallBack() {
        var jobName = $("#job_modify_name");
        var jobPrice = $("#job_modify_price");
        var jobAsk = $("#job_modify_ask");
        var companyName = $("#company_modify_name");
        var jobLogo = $("#logo_modify");
        var modifyJob = $("#modifyJob");

        var formData = new FormData();
        formData.append("jobName", jobName.val());
        formData.append("jobPrice", Number(jobPrice.val()));
        formData.append("jobAsk", jobAsk.val());
        formData.append("companyName", companyName.val());
        formData.append("id", modifyJob.attr("data-id"));
        formData.append("jobLogo", jobLogo[0].files[0]);

        $.ajax({
            type: "post",
            url: "/join/JobSave",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: this.jobsaveAjaxCb.bind(this)
        })
    }

    jobsaveAjaxCb(data) {
        if (data.state) {
            this.createList();
        }
    }
}



