cola(function (model) {
    model.dataType({
        name: "exam",
        properties: {
            paperID: {caption: "试卷ID"},
            paperName: {caption: "试卷名称"},
            subject: {caption: "科目"},
            totalScore: {caption: "总分"},
        }
    });

    model.set("subjectname",[
        {
            key:"",
            name:"所有科目"
        },
        {
            key:"01",
            name:"数学"
        },
        {
            key:"02",
            name:"英语"
        },
    ]);

    model.describe("paperSearchResult","exam");
    model.set("paperSearchResult",[]);
    model.set("paperSearchResult", {
        paperID: "",
        paperName: "",
        subject: "",
        totalScore: ""
    });

    model.describe("condition","exam");
    model.set("condition",{});
    model.set("condition", {
        paperName: "",
        subject: "",
    });

    model.describe("paperSearchResult", {
        dataType: "exam",
        provider: {
            url: "controller/demo/paper/paper/queryPaper?from={{$from}}&limit={{$limit}}",
            pageSize: 10, method: "POST",
            parameter: "{{condition}}",
            ajaxOptions: {contentType: "application/json", sendJson: true}
        }
    });

    model.action({
        test: function () {
            cola.alert("方法被调用");
        },

        queryPaper: function () {
            model.flush("paperSearchResult");
        },
    })

    model.action.queryPaper();
})
